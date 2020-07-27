import { Patient } from './patient.type';
import { Professional } from './profesional.type';
import { Address } from './address.type';
import { Document } from 'mongoose';

export interface User extends Document{

    id?: string;
    name: string;
    surname: string;
    lastName?: string;
    genero?: string;
    birthDate?: string;
    identification?: string;

    address?: Address;

    patient?: Patient;
    professional?: Professional;

}