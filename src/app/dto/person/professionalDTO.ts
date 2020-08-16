import { ApiProperty } from "@nestjs/swagger";

type ProfessionalType = '' | 'DOCTOR' | 'NURSER' | 'ADMINISTRATIVE';

export class ProfessionalDTO {
    @ApiProperty({description: 'Number of the colegiado', required: true})
    nColegiado: string;
    professionalType: ProfessionalType;

    constructor(nColegiado: string, professionalType: ProfessionalType){
        this.nColegiado = nColegiado;
        this.professionalType = professionalType;
    }
}