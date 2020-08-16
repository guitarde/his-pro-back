import { InsurerDTO } from './InsurerDTO';
import { ApiProperty } from '@nestjs/swagger';

export class PatientDTO {

    @ApiProperty({description: 'Number clinic history', required: true })
    nch: string;
    insurer?: InsurerDTO[];

    constructor(nch: string, insurer: InsurerDTO[]){
        this.nch = nch;
        this.insurer = insurer;
    }
}