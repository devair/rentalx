import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { container } from 'tsyringe';

class CreateCategoryController {

    async handle(request: Request, response: Response): Promise<Response> {

        const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

        const { name, description } = request.body;

        try {
            await createCategoryUseCase.execute({ name, description });
        }
        catch (ex) {
            return response.status(400).json({ error: ex.message });
        }
        return response.status(201).send();

    }

}

export { CreateCategoryController };