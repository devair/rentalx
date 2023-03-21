import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {

    constructor(private listSpecificationUseCase: ListSpecificationUseCase){}

    async handle(request: Request, response: Response){
        const all = await this.listSpecificationUseCase.execute();
        
        return response.status(200).json(all);
    }

} 
export { ListSpecificationController };