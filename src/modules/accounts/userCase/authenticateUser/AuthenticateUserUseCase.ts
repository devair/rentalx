import { inject, injectable } from "tsyringe";
import { compare } from 'bcryptjs';
import { sign } from "jsonwebtoken";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string;
}

@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject('UsersRepository')
        private repository: IUsersRepository){ 

    }

    async execute({ email, password }: IRequest): Promise<IResponse>{

        const user = await this.repository.findByEmail(email);

        if(!user){
            throw new AppError('Email ou password incorrect');
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            throw new AppError('Email ou password incorrect');
        }

        const token = sign({ }, '8d70e0d1acb06b4648c7aa8927509660',
            {
                subject: user.id,
                expiresIn: '1d'
            }
        );

        const tokenReturn: IResponse = {
            user : {
                name: user.name,
                email: user.email,
            },
            token
        }

        return tokenReturn;
    }
}

export { AuthenticateUserUseCase}