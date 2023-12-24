import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/entities/User";
import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, email, driver_license, password, avatar, id }: ICreateUserDTO): Promise<void> {

        const user = this.repository.create({
            name, email, driver_license, password, avatar, id
        })

        await this.repository.save(user);

    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();

        return users;
    }

    async findByEmail(email): Promise<User>{
        const user = await this.repository.findOne({email});
        return user; 
    }

    async findById(id): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }
}

export { UsersRepository }