import { Injectable, NotFoundException, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import *  as  bcrypt from 'bcrypt';
import { UserLoginService } from '../../user-login/services/user-login.service';
import { JwtPayLoad } from '../domain/payloadDTO';
import { LoginUserDTO } from '../domain/loginUserDTO';

@Injectable()
export class AuthService {

    constructor(private userLoginService: UserLoginService, private jwtService: JwtService) { };

    async login(loginUserDTO: LoginUserDTO) {
        let result = await this.userLoginService.findByEmail(loginUserDTO.email);
        if (!result) throw new NotFoundException();
        let checkPass = await bcrypt.compare(loginUserDTO.password, result.password);
        if (!checkPass) throw new UnauthorizedException();

        return this.createJwtPayload(result);

    }
    createJwtPayload(user) {
        let data = {
            email: user.email,
            id: user._id
        }
        let jwt = this.jwtService.sign(data);
        return {
            expiresIn: 3600,
            token: jwt
        }
    }


    async validateUserByJwt(payload: JwtPayLoad) {
        Logger.log("Entra en validateUserByJWT");
        let user = await this.userLoginService.findByEmail(payload.email);
        if (user) return user;
        throw new UnauthorizedException();
    }
}
