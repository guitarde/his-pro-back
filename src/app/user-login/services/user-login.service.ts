import { Injectable, Logger, BadGatewayException, ConflictException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserLoginDTO } from '../domain/user-loginDTO';
import *  as  bcrypt from 'bcrypt';
import { IUserLogin } from '../domain/models/user-login.model';


@Injectable()
export class UserLoginService {


    constructor(@InjectModel("UserLogin") private userLoginModel: Model<IUserLogin>) { }


    async registerUser(registerUserLogin: UserLoginDTO) {

        const userLoginModel = new this.userLoginModel(registerUserLogin);
        const SESSSION = await userLoginModel.db.startSession();

        try {
            SESSSION.startTransaction();
            let pass = await bcrypt.hash(registerUserLogin.password, 10);

            let result = await this.userLoginModel.create([
                {

                    "username": "user11ss",
                    "email": "user11@email.com",
                    "password": "123456",
                    "role": "USER_ROLE"
                }
            ], { session: SESSSION })
            await SESSSION.commitTransaction();
            return result;
        } catch (error) {
            Logger.error(error + registerUserLogin);
            await SESSSION.abortTransaction();

            if (error.code === 11000) throw new ConflictException("Usuario duplicado");
            throw new BadGatewayException();
        } finally {
            SESSSION.endSession();
        }
    }

    async findByEmail(email: string) {
        return this.userLoginModel.findOne({ 'email': email });
    }

    async getAllUsers() {
        return await this.userLoginModel.find({});
    }

}
