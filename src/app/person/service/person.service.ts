import { Injectable, Logger, NotFoundException, BadGatewayException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Person } from '../model/person.model';
import { PersonDTO } from 'src/app/dto/personDTO';
import { ITPerson } from './ITPerson';

@Injectable()
export class PersonService implements ITPerson {

  constructor(@InjectModel('Person') private readonly personModel: ReturnModelType<typeof Person>){}

  async createPerson(person: PersonDTO): Promise<Person | null> {
        Logger.log('Service create user : ' + JSON.stringify(person));


        let newUser = new this.personModel({
            ...person
        });
        const SESSSION = await newUser.db.startSession();

        let result;
        try {
            SESSSION.startTransaction();
            result = await this.personModel.create([newUser], { session: SESSSION })
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

    async getAllPersons(): Promise<Person[] | null> {

        return await this.personModel.find({});
    }

    async getPersonById(id: string): Promise<Person | null> {

        let result = await this.personModel.findById({ _id: id });
        if (!result) throw new NotFoundException();

        return result;
    }


    async getPersonByCriteria(criteria: string): Promise<Person[] | null> {
        let regex = new RegExp(criteria, 'i');

        return new Promise((resolve, reject) => {
            this.personModel.find({})
                .or([{ identification: regex }, { name: regex }])
                .exec((err, users) => {
                    if (err)
                        reject('An error occurred while searching by criteria');
                    if (!users) throw new NotFoundException();
                    resolve(users);
                });
        });
    }



    async deletePersonById(id: string): Promise<Person> {

        let userDelet = await this.personModel.findByIdAndDelete({ _id: id });

        if (!userDelet) throw new NotFoundException('User not found');
        return userDelet;

    }

    async updatePerson(id: string, person: PersonDTO): Promise<Person | null> {

        return await this.personModel.findByIdAndUpdate({ _id: id }, {person})
            .then(data => Promise.resolve(data)).catch(err => console.log('Hubo un error : ' + err)).then();

    }

    async deleteAllDoctors(): Promise<Person[] | null> {

        this.personModel.deleteMany({ 'professional.professionalType': 'DOCTOR' }).then();

        return this.getAllPersons();
    }

}