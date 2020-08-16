import { Injectable, Logger, BadGatewayException, ConflictException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import *  as  bcrypt from 'bcrypt';
import { ReturnModelType } from "@typegoose/typegoose";
import { User } from "../model/user.model";
import { UserDTO } from "src/app/dto/user/userDTO";


@Injectable()
export class UserLoginService {

    constructor(@InjectModel('User') private readonly userModel: ReturnModelType<typeof User>){}

    async registerUser(registerUserLogin: UserDTO) {

        const userLoginModel = new this.userModel(registerUserLogin);
        const SESSSION = await userLoginModel.db.startSession();
        let result;
        try {
            SESSSION.startTransaction();
            let pass = await bcrypt.hash(registerUserLogin.password, 10);

            result = await this.userModel.create([
                {
                    ...registerUserLogin,
                    password: pass
                }
            ], { session: SESSSION })
            await SESSSION.commitTransaction();
        } catch (error) {
            Logger.error(error + registerUserLogin);
            await SESSSION.abortTransaction();

            if (error.code === 11000) throw new ConflictException("Usuario duplicado");
            throw new BadGatewayException();
        } finally {
            SESSSION.endSession();
        }
        return result;

    }

    async findByEmail(email: string) {
        return this.userModel.findOne({ 'email': email });
    }

    async getAllUsers() {
        return await this.userModel.find({});
    }

}
