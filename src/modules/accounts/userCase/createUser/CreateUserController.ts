import { Request, Response } from "express";
import { container } from 'tsyringe';
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController{

    async handle(request: Request, response: Response): Promise<Response> {
        
        const { name, email, password, driver_license } = request.body;

        const createUserUseCase = container.resolve(CreateUserUseCase);
        
        try{
            await createUserUseCase.execute({name, email, password, driver_license});
        }
        catch (ex){
            return response.status(400).json({ error: ex.message });
        }

        return response.status(201).send();
    }
}

export { CreateUserController }