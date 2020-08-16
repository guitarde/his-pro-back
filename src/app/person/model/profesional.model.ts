import { prop } from "@typegoose/typegoose";


type professionalRoleValidos = {
  values: ['DOCTOR', 'NURSER', 'ADMINISTRATIVE'],
  message: '{VALUE} ROLE professional invalid'
}


export class Professional {

  @prop({ require: [true, 'Number colegiado is required'] })
  nColegiado: string;

  @prop()
  professionalType:  professionalRoleValidos ;

  
}
