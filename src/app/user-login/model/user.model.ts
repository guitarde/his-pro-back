import { prop, modelOptions } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
      collection: 'user',
    }
  })
export class User {

  @prop({ requiere: [true, 'Name is requiered']})
  name: string
  @prop({ requiere: [true, 'User name is requiered']})
  username: string;
  @prop({ requiere: [true, 'Email is requiered']})
  email: string;
  @prop({ requiere: [true, 'Password is requiered']})
  password: string;
  role: string;

}
