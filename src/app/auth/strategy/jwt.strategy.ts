import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from '../services/auth.service';
import { JwtPayLoad } from '../domain/payloadDTO';
import { config } from '../config/auth.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'estaesmiphrassecreate'
        });
        Logger.log("Creando el jwtStrategy: " + config.secret);
    }

    async validate(payload: JwtPayLoad) {
        Logger.log("Entrando a Validate");

        const user = await this.authService.validateUserByJwt(payload);
        if (!user) throw new UnauthorizedException('Invalid token');
        return user;

    }

}