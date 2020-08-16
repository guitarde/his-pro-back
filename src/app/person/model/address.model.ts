import { prop } from '@typegoose/typegoose';


export class Address {

  @prop()
  street: string;
  @prop()
  number: string;
  @prop()
  door: number;
  @prop()
  codePostal: number;
  @prop()
  city: string;

}