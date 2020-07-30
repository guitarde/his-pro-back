import { Controller, Post, Body, Get, Logger, Param, HttpStatus, HttpException, ConflictException } from '@nestjs/common';
import { UserLoginService } from '../services/user-login.service';
import { UserLoginDTO } from '../domain/user-loginDTO';

@Controller('user-login')
export class UserLoginController {

    constructor(private _userLoginService: UserLoginService) { }

    @Post()
    registerUser(@Body() userloginDTO: UserLoginDTO) {
        console.log(JSON.stringify(userloginDTO));
        try{
            let data = this._userLoginService.registerUser(userloginDTO);
            Logger.log(data);
    return data;
        }catch(Exception){
            if(Exception.code === 11000) throw new ConflictException("Usuario duplicado");
            throw new HttpException("Exception", HttpStatus.CONFLICT);
        }
    }


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
}
