import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './domain/schema/user.schema';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    ],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule { }
