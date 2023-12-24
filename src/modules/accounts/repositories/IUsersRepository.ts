import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository{
    create(data: ICreateUserDTO): Promise<void>;

    list(): Promise<User[]>;

    findByEmail(email): Promise<User>;

    findById(id: string): Promise<User>;
}

export { IUsersRepository };