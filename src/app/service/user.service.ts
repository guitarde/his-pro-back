import { Injectable, Logger } from '@nestjs/common';
import { User } from '../domain/interface/models/user.type';
import { UserDTO } from '../domain/userDTO';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { rejects } from 'assert';
import { resolve } from 'path';



@Injectable()
export class UserService implements UserService {


    constructor(@InjectModel('User') private userModel: Model<User>) { }


    async createUser(userDTO: UserDTO): Promise<UserDTO> {
        Logger.log('Service create user : ' + JSON.stringify(userDTO));

        return await new this.userModel(
            {
                ...userDTO,
                gender: userDTO.genero
            }
        ).save()
            .then(userResp => {
                Logger.log('User created successfully : ' + userResp)
                return Promise.resolve(userResp);
            });
    }

    async getAllUsers(): Promise<User[]> {

        return await this.userModel.find({});
    }

    async getUserById(id: string): Promise<User> {


        return await this.userModel.findById({ _id: id });
    }


    async getUserByCriteria(criteria: string): Promise<User[]> {
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
        });

        return Promise.resolve();
    }


    async deleteAllDoctors(): Promise<User[]> {


        this.userModel.deleteMany({ 'professional.professionalType': 'DOCTOR' }).then();

        return this.getAllUsers();
    }

}