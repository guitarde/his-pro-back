import { prop } from "@typegoose/typegoose"
import { Address } from "./address.model";
import { Type } from "class-transformer";
import { Professional } from "./profesional.model";
import { Patient } from "./patient.model";


export class Person {

  @prop({ requiere: [true, 'Name is requiered']})
  name: string
  @prop({requiere: [true, 'Surname is requiered']})
  surname: string ;
  @prop({ requiere: [true, 'Lastname is requiered']})
  lastname: string;
  @prop()
  gender: string;
  @prop()
  birthDate: string;
  @prop()
  identification: string ;
  @prop()
  @Type(() => Address)
  address: Address;
  @prop()
  @Type(()=> Professional)
  professional: Professional;
  @prop()
  @Type(() => Patient)
  patient: Patient;

}