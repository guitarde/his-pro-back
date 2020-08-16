import { AddressDTO } from './addresDTO';
import { PatientDTO } from './patientDTO';
import { ProfessionalDTO } from './professionalDTO';
import { IsNotEmpty } from "class-validator";

export class PersonDTO {
    
    @IsNotEmpty()
    name: string;
    surname: string;
    lastname?: string;
    gender?: string;
    birthDate?: string;
    identification?: string;
    address?: AddressDTO;
    patient?: PatientDTO;
    professional?: ProfessionalDTO;

    constructor(name: string, surname: string, lastname: string,
        gender: string, birthDate: string, identification: string,
        address: AddressDTO, patient: PatientDTO, professional: ProfessionalDTO){

        this.name = name;
        this.surname = surname;
        this.lastname = lastname;
        this.gender = gender;
        this.birthDate = birthDate;
        this.identification = identification;
        this.address = address;
        this.patient = patient;
        this.professional = professional;

    }
}
