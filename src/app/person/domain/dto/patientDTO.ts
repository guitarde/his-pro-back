import { InsurerDTO } from './InsurerDTO';
export class PatientDTO {
    nch: string;
    insurer?: InsurerDTO[];
}