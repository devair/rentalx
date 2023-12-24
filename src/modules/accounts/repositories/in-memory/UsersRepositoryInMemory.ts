import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO"
import { User } from "@modules/accounts/infra/typeorm/entities/User"
import { IUsersRepository } from "../IUsersRepository"

class UsersRepositoryInMemory implements IUsersRepository {
    users: User[]

    constructor() {
        this.users = []
    }
    async create({ driver_license, email, name, password }: ICreateUserDTO): Promise<void> {
        const user = new User()

        Object.assign(user, { driver_license, email, name, password })

        this.users.push(user)
    }

    async list(): Promise<User[]> {
        const all = this.users
        return all
    }

    async findByEmail(email: any): Promise<User> {
        const userFound = this.users.find((user) => user.email = email)
        return userFound
    }

    async findById(id: string): Promise<User> {
        const userFound = this.users.find((user) => user.id = id)
        return userFound
    }

}
export { UsersRepositoryInMemory }