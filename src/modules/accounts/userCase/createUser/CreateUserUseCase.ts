import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { hash } from 'bcryptjs';
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase{

    constructor(
        @inject('UsersRepository')
        private repository: IUsersRepository){ }
    

    async execute({name, email, password, driver_license }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.repository.findByEmail(email);

        if(userAlreadyExists){
            throw new AppError('User already exists');
        }

        const passwordHash = await hash(password, 9);

        await this.repository.create( { name, email, password: passwordHash, driver_license });
    }
}

export { CreateUserUseCase }