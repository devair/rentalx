import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";


@injectable()
class CreateUserUseCase{

    constructor(
        @inject('UsersRepository')
        private repository: IUsersRepository){ }
    

    async execute({name, username, email, password, driver_license }: ICreateUserDTO): Promise<void> {

        await this.repository.create( { name, username, email, password, driver_license });
    }
}

export { CreateUserUseCase }