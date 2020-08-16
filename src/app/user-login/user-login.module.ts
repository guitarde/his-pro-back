import { Module } from '@nestjs/common';
import { UserLoginController } from './controller/user-login.controller';
import { PassportModule } from '@nestjs/passport';
import { User } from './model/user.model';
import { UserLoginService } from './services/user.service';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
    imports: [
        TypegooseModule.forFeature([User]),
        PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    ],
    exports: [UserLoginService],
    controllers: [UserLoginController],
    providers: [UserLoginService],
})
export class UserLoginModule { }
