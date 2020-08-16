import { Injectable, NotFoundException, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import *  as  bcrypt from 'bcrypt';
import { UserLoginService } from '../../user-login/services/user.service';
import { JwtPayLoad } from '../domain/payloadDTO';
import { LoginUserDTO } from '../domain/loginUserDTO';

@Injectable()
export class AuthService {

    constructor(private userLoginService: UserLoginService, private jwtService: JwtService) { };

    async login(loginUserDTO: LoginUserDTO) {

        Logger.log("Checking login user: " + loginUserDTO);
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

        return {
            expiresIn: 3600,
            token: this.jwtService.sign(data)
        }
    }


    async validateUserByJwt(payload: JwtPayLoad) {
        Logger.log("Entra en validateUserByJWT");
        let user = await this.userLoginService.findByEmail(payload.email);
        if (user) return user;
        throw new UnauthorizedException();
    }
}
