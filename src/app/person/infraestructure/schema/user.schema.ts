import * as mongoose from 'mongoose';
import { AddressSchema } from './address.schema';


export const UserSchema = new mongoose.Schema({

    name: { type: String, requiere: [true, 'Name is requiered'] },
    surname: { type: String, requiere: [true, 'Surname is requiered'] },
    lastname: { type: String, requiere: [true, 'Lastname is requiered'] },
    gender: { type: String },
    birthDate: { type: String },
    identification: { type: String },
    address: { type: AddressSchema },

    professional: { type: mongoose.Schema.Types, ref: 'Professional' },

    patient: { type: mongoose.Schema.Types, ref: 'Patient' }

}, { collection: 'users' });