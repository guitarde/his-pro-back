import { Injectable, Logger, NotFoundException, BadGatewayException } from '@nestjs/common';
import { IUser } from '../domain/models/user.type';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from '../domain/dto/userDTO';
import { ITUser } from './ITUser';

@Injectable()
export class UserService implements ITUser {


    constructor(@InjectModel('User') private userModel: Model<IUser>) { }


    async createUser(userDTO: UserDTO): Promise<IUser> {
        Logger.log('Service create user : ' + JSON.stringify(userDTO));


        let newUser = new this.userModel({
            ...userDTO
        });
        const SESSSION = await newUser.db.startSession();

        let result;
        try {
            SESSSION.startTransaction();
            result = await this.userModel.create([newUser], { session: SESSSION })
            await SESSSION.commitTransaction();
        } catch (error) {
            Logger.error(error);
            await SESSSION.abortTransaction();
            throw new BadGatewayException();
        } finally {
            SESSSION.endSession();
        }

        return result;

    }

    async getAllUsers(): Promise<IUser[]> {

        return await this.userModel.find({});
    }

    async getUserById(id: string): Promise<IUser> {

        let result = await this.userModel.findById({ _id: id });
        if (!result) throw new NotFoundException();

        return result;
    }


    async getUserByCriteria(criteria: string): Promise<IUser[]> {
        let regex = new RegExp(criteria, 'i');

        return new Promise((resolve, reject) => {
            this.userModel.find({})
                .or([{ identification: regex }, { name: regex }])
                .exec((err, users) => {
                    if (err)
                        reject('An error occurred while searching by criteria');
                    if (!users) throw new NotFoundException();
                    resolve(users);
                });
        });
    }



    async deleteUserById(id: string): Promise<IUser> {

        let userDelet = await this.userModel.findByIdAndDelete({ _id: id });

        if (!userDelet) throw new NotFoundException('User not found');
        return userDelet;

    }


    async updateUser(id: string, userDTO: UserDTO): Promise<IUser> {

        return await this.userModel.findByIdAndUpdate({ _id: id }, userDTO,)
            .then(data => Promise.resolve(data)).catch(err => console.log('hubo un error : ' + err)).then();

    }


    async deleteAllDoctors(): Promise<IUser[]> {


        this.userModel.deleteMany({ 'professional.professionalType': 'DOCTOR' }).then();

        return this.getAllUsers();
    }

}