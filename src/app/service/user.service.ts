import { Injectable, Logger } from '@nestjs/common';
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

        return await new this.userModel({
            ...userDTO,
            gender: userDTO.genero
        }).save()
            .then(userResp => {
                Logger.log('User created successfully : ' + userResp)
                return Promise.resolve(userResp);
            });
    }

    async getAllUsers(): Promise<IUser[]> {

        return await this.userModel.find({});
    }

    async getUserById(id: string): Promise<IUser> {


        return await this.userModel.findById({ _id: id });
    }


    async getUserByCriteria(criteria: string): Promise<IUser[]> {
        let regex = new RegExp(criteria, 'i');

        return new Promise((resolve, reject) => {
            this.userModel.find({})
                .or([{ "identification": regex }, { name: regex }])
                .exec((err, users) => {
                    if (err)
                        reject('An error occurred while searching by criteria');
                    resolve(users);
                });
        });
    }



    async deleteUserById(id: string): Promise<void> {

        this.userModel.findByIdAndDelete({ _id: id }, (err, resp) => {
            console.log(resp);
            console.log(err);

            resp.toJSON({

            });
        });

        return Promise.resolve();
    }


    async updateUser(id: string, userDTO: UserDTO): Promise<IUser> {

        this.userModel.findByIdAndUpdate({ _id: id }, userDTO,)
            .then(data => console.log("Data: " + data)).catch(err => console.log('hubo un error : ' + err));

        return;
    }


    async deleteAllDoctors(): Promise<IUser[]> {


        this.userModel.deleteMany({ 'professional.professionalType': 'DOCTOR' }).then();

        return this.getAllUsers();
    }

}