import { Controller, Get, Post, Body, Param, Delete, Logger, Put } from '@nestjs/common';
import { IUser } from '../domain/models/user.type';
import { UserService } from '../service/user.service';
import { UserDTO } from '../domain/dto/userDTO';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {

    constructor(private _userService: UserService) { }

    @Get()
    getAllUsers(): Promise<IUser[]> {
        Logger.log("Calling controller retrieve all Users");

        return this._userService.getAllUsers();
    }


    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Get('/:id')
    getUserById(@Param('id') id: string): Promise<IUser> {

        Logger.log("Calling controller find user by ID : " + id);

        return this._userService.getUserById(id);
    }

    @Get('/criteria/:criteria')
    getUserByCriteria(@Param('criteria') criteria: string): Promise<IUser[]> {

        Logger.log("Calling controller find user by criteria : " + criteria);

        return this._userService.getUserByCriteria(criteria);
    }


    @Post()
    createUser(@Body() userDTO: UserDTO): Promise<IUser> {
        Logger.log("Calling controller create new user from type : " + ('patient' in userDTO ? 'Patient' : 'Professional'));

        return this._userService.createUser(userDTO).then();
    }

    @Put('/:id')
    updateUser(
        @Param('id') id: string,
        @Body() userDTO: UserDTO): Promise<IUser> {
        Logger.log("Calling controller update user by ID : " + id);
        return this._userService.updateUser(id, userDTO).then();
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string): Promise<void> {
        Logger.log("Calling controller delete user by ID : " + id);

        return this._userService.deleteUserById(id);
    }

    @Delete('/doctors/del')
    deleteAllDoctors(): Promise<IUser[]> {
        Logger.log('Calling controller delete all doctors');

        return this._userService.deleteAllDoctors();
    }

}