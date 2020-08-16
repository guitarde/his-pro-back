import { Module } from '@nestjs/common';
import { UserLoginController } from './controller/user-login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { User } from './model/user.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserLoginService } from './services/user.service';

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
