type ProfessionalType = '' | 'DOCTOR' | 'NURSER' | 'ADMINISTRATIVE';

export class ProfessionalDTO {

    nColegiado: string;
    professionalType: ProfessionalType;
}