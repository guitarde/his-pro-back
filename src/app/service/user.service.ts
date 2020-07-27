import { Injectable, Logger } from '@nestjs/common';
import { User } from '../domain/interface/models/user.type';
import { UserDTO } from '../domain/userDTO';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { rejects } from 'assert';
import { resolve } from 'path';



@Injectable()
export class UserService implements UserService {

    private users: User[] = [];

    constructor(@InjectModel('User') private userModel: Model<User>) { }


    async createUser(user: UserDTO): Promise<UserDTO> {
        Logger.log('Service create user : ' + JSON.stringify(user));

        return await new this.userModel(
            {
                ...user,
                gender: user.genero
            }
        ).save();
    }

    async getAllUsers(): Promise<User[]> {

        return await this.userModel.find({});
    }

    async getUserById(id: string): Promise<User> {


        return await this.userModel.findById({ _id: id });
    }


    // TODO _ Missing tha workng 
    async getUserByCriteria(criteria: string): Promise<User[]> {
        let regex = new RegExp(criteria, 'i');

        return new Promise((resolve, reject) => {
            this.userModel.find({})
                .or([{ "identification": regex }, { name: regex }])
                .exec((err, users) => {
                    if (err)
                        reject('A error ocurrio while trieve all users');
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


        this.userModel.remove({ 'professional.professionalType': 'DOCTOR' });

        return this.getAllUsers();
    }

}