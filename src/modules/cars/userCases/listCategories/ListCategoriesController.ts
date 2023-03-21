import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController{

    constructor(private listCategoryUseCase: ListCategoriesUseCase){}

    async handle(request: Request, response: Response ){
        const all = await this.listCategoryUseCase.execute();

        return response.status(200).json(all);
    }

} 
export { ListCategoriesController};