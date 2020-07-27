import { User } from "../domain/models/user.type";
import { UserDTO } from '../domain/dto/userDTO';
 
export interface UserInterface {

    createUser(userDTO: UserDTO): Promise<User>;

    getAllUsers(): Promise<User[]>;

    getUserById(id: string): Promise<User>;

    getUserByCriteria(criteria: string): Promise<User[]>;

    deleteUserById(id: string): Promise<void>;

    deleteAllDoctors(): Promise<User[]>;

}

