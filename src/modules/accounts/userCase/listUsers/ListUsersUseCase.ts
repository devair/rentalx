import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { injectable, inject } from "tsyringe";

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