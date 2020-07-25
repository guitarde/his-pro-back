import { Address } from './interface/models/address.type';
import { AddressDTO } from './addresDTO';
import { PatientDTO } from './patientDTO';
import { ProfessionalDTO } from './professionalDTO';
export class UserDTO {
    name: string;
    surname: string;
    lastName?: string;
    genero?: string;
    birthDate?: string;
    identification?: string;

    address?: AddressDTO;

    patient?: PatientDTO;
    professional?: ProfessionalDTO;
}