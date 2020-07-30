import { Document } from "mongoose";

export interface IUserLogin extends Document {

    email:string,
    password: string

}
