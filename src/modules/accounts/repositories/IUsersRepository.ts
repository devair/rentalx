import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository{
    create(data: ICreateUserDTO): Promise<void>;

    list(): Promise<User[]>;

    findByEmail(email): Promise<User>;
}

export { IUsersRepository };