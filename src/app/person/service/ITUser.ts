import { IUser } from "../domain/models/user.type";
import { UserDTO } from '../domain/dto/userDTO';

export interface ITUser {

    createUser(userDTO: UserDTO): Promise<IUser>;

    getAllUsers(): Promise<IUser[]>;

    getUserById(id: string): Promise<IUser>;

    getUserByCriteria(criteria: string): Promise<IUser[]>;

    deleteUserById(id: string): Promise<IUser>;

    deleteAllDoctors(): Promise<IUser[]>;

    updateUser(id: string, userDTO: UserDTO): Promise<IUser>;

}

