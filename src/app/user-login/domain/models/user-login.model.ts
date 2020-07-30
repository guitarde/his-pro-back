import { Document } from "mongoose";

export interface IUserLogin extends Document {

    username: string;
    email: string;
    password: string;
    role: string;

}
