import { AuthService } from './services/auth.service';
import { AuthController } from './controller/auth.controller';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';
import { UserLoginModule } from '../user-login/user-login.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({
      secretOrPrivateKey: 'estaesmiphrassecreate',
      signOptions: {
        expiresIn: 3600
      }
    }), UserLoginModule],
  controllers: [AuthController,],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule { }
