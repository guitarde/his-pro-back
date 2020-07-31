import { Controller, Post, Body, Logger } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginUserDTO } from '../domain/loginUserDTO';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('/login')
    async login(@Body() loginUserDTO: LoginUserDTO) {

        Logger.log('Request login with data : ', JSON.stringify(loginUserDTO));
        return  await this.authService.login(loginUserDTO);
    }

}
