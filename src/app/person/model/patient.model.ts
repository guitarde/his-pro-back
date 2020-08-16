import { Insurer } from "./insurer.model";
import { Type } from 'class-transformer';
import { prop } from "@typegoose/typegoose";


export class Patient {

  @prop()
  nch: String;

  @Type(() => Insurer)
  @prop()
  insurer: Insurer;

}