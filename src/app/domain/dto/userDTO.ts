import { AddressDTO } from './addresDTO';
import { PatientDTO } from './patientDTO';
import { ProfessionalDTO } from './professionalDTO';
import { IsNotEmpty } from "class-validator";

export class UserDTO {
    @IsNotEmpty()

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