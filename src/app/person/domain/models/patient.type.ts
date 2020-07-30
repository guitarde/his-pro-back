import { Insurer } from './Insurer.type';

export interface Patient  {

    nch: string;
    insurer?: Insurer[];
}