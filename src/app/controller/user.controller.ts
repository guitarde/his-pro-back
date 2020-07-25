import { Controller, Get, Post, Body, Param, Delete, Logger, Put } from '@nestjs/common';
import { UserDTO } from '../domain/userDTO';
import { User } from '../domain/interface/models/user.type';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {

    constructor(private _userService: UserService) { }

    @Get()
    getAllUsers(): Promise<User[]> {
        Logger.log("Calling controller retrieve all Users");

        return this._userService.getAllUsers();
    }


    @Get('/:id')
    getUserById(@Param('id') id: string): Promise<User> {

        Logger.log("Calling controller find user by ID : " + id);

        return this._userService.getUserById(id);
    }

    @Get('/:criteria')
    getUserByCriteria(@Param('criteria') criteria: string): Promise<User[]> {

        Logger.log("Calling controller find user by criteria : " + criteria);

        return this._userService.getUserByCriteria(criteria);
    }


    @Post()
    createUser(@Body() userDTO: UserDTO): Promise<User> {
        Logger.log("Calling controller create new user from type : " + ('patient' in userDTO ? 'Patient' : 'Professional'));
        return this._userService.createUser(userDTO)
            .then(userResp => {
                Logger.log('User created successfully : ' + userResp)
                return Promise.resolve(userResp);
            }).then();
    }

    @Put('/:id')
    updateUser(
        @Param('id') id: string,
        @Body() userDTO: UserDTO,
    ): User {
        Logger.log("Calling controller update user by ID : " + id);
        console.log(userDTO)
        return;
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string): Promise<void> {
        Logger.log("Calling controller deñete user by ID : " + id);

        return this._userService.deleteUserById(id);
    }

}