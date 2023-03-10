import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


class CreateSpecificationController {

    constructor(private createSpecificationUseCase: CreateSpecificationUseCase) { }

    handle(request: Request, response: Response): Response {

        const { name, description } = request.body;

        try {
            this.createSpecificationUseCase.execute({ name, description });
        }
        catch (ex) {
            return response.status(400).json({ error: ex.message });
        }
        return response.status(201).send();
    }
}

export { CreateSpecificationController };