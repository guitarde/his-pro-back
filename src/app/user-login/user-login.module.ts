import { Module } from '@nestjs/common';
import { UserLoginController } from './controller/user-login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { userLoginSchema } from './infraestructure/user-login.schema';
import { UserLoginService } from './services/user-login.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'UserLogin', schema: userLoginSchema }]),
        PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    ],
    exports: [UserLoginService],
    controllers: [UserLoginController],
    providers: [UserLoginService],
})
export class UserLoginModule { }
