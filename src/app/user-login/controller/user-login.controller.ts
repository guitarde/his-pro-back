import { Controller, Post, Body, Get, Logger, Param, HttpStatus, HttpException, ConflictException, UseGuards, Req } from '@nestjs/common';
import { UserLoginService } from '../services/user.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UserDTO } from 'src/app/dto/user/userDTO';

@Controller('user-login')
export class UserLoginController {

    constructor(private _userLoginService: UserLoginService) { }

    @Post()
    registerUser(@Body() userloginDTO: UserDTO) {
        console.log(JSON.stringify(userloginDTO));
        try {
            let data = this._userLoginService.registerUser(userloginDTO);
            Logger.log(data);
            return data;
        } catch (Exception) {
            if (Exception.code === 11000) throw new ConflictException("Usuario duplicado");
            throw new HttpException("Exception", HttpStatus.CONFLICT);
        }
    }

    @UseGuards(AuthGuard())
    @Get()
    getAllUsersLogin() {
        Logger.log('Listing of users')
        return this._userLoginService.getAllUsers().then();
    }

    @Get('/:email')
    getUserByEmail(@Param('email') email: string) {
        Logger.log('Find user by email : ' + email);
        return this._userLoginService.findByEmail(email).then();
    }

    @Get('/guard/guard')
    @UseGuards(AuthGuard())
    getGuarUser(@Req() req: Request) {
        Logger.log(JSON.stringify(req['user']));
        return "Entra";

    }
}
