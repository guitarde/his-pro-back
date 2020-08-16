import { PersonDTO } from '../../dto/personDTO';
import { Person } from '../model/person.model';

export interface ITPerson {

    createPerson(person: PersonDTO): Promise<Person | null>;

    getAllPersons(): Promise<Person[] | null>;

    getPersonById(id: string): Promise<Person | null>;

    getPersonByCriteria(criteria: string): Promise<Person[] | null>; 

    deletePersonById(id: string): Promise<Person | null>;

    deleteAllDoctors(): Promise<Person[] | null>; 

    updatePerson(id: string, person: PersonDTO): Promise<Person | null>;

}

