import { User } from "../domain/interface/models/user.type";
import { UserDTO } from '../domain/userDTO';

export interface UserInterface {

    createUser(userDTO: UserDTO): Promise<User>;

    getAllUsers(): Promise<User[]>;

    getUserById(id: string): Promise<User>;

    getUserByCriteria(criteria: string): Promise<User[]>;


    deleteUserById(id: string): Promise<void>;

}