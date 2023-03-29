import { injectable, inject } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";


@injectable()
class ListUsersUseCase {

    constructor(
        @inject('UsersRepository')
        private repository: IUsersRepository) { }

    async execute(): Promise<User[]> {
        return await this.repository.list();
    }
}

export { ListUsersUseCase }