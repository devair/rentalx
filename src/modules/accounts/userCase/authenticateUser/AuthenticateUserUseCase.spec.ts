import { AppError } from "@shared/errors/AppError"
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO"
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository"
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

describe('Authenticate user',()=>{
    let userRepository: IUsersRepository
    let authenticateUser : AuthenticateUserUseCase
    let createUserUseCase : CreateUserUseCase

    beforeEach(() =>{
        userRepository = new UsersRepositoryInMemory()
        authenticateUser = new AuthenticateUserUseCase(userRepository)
        createUserUseCase = new CreateUserUseCase(userRepository)
    })

    it('should be able to authenticate an user', async ()=>{
        const user: ICreateUserDTO = {
            driver_license: '123',
            email: 'fulaninho@semvez.com',
            name: 'fulaninho',
            password: '123'        
        }

        await createUserUseCase.execute(user)

        const result =  await authenticateUser.execute({
            email: user.email,password: user.password
        })

        expect(result).toHaveProperty('token')
    })

    it('should not be able to authenticate a nonexistent user', ()=>{
        expect(async () => {
            await authenticateUser.execute({
                email: 'naoexiste@email.com',
                password: '111'
            })
        }).rejects.toBeInstanceOf(AppError)
    })

    it('should not be able to authenticade with incorret password', async ()=>{
        const user: ICreateUserDTO = {
            driver_license: '123',
            email: 'fulaninho@semvez.com',
            name: 'fulaninho',
            password: '123'        
        }

        await createUserUseCase.execute(user)
                
        expect(async () => {
            await authenticateUser.execute({
                email: user.email,
                password: '111'
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})