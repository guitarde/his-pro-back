import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
 import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { UserSchema } from './infraestructure/schema/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule { }
