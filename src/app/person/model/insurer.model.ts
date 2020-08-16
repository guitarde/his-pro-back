import { prop } from "@typegoose/typegoose"

type insurerTypesValid = {
  values: ['HEALTH', 'FAMILY', 'DENTAL'],
  message: '{VALUE} Type insurer invalid'
}

export class Insurer {

  @prop()
  insurerName: String;
  @prop()
  insurerType: insurerTypesValid;
  @prop()
  cardNumber: String;

}