import { Category } from "@modules/cars/entities/Category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoriesUseCase {
    
    constructor(
        @inject('CategoriesRepository')
        private categoriesRepository: ICategoriesRepository
    ){}

    async execute(): Promise<Category[]> {
        return  await this.categoriesRepository.list();
    }
}

export { ListCategoriesUseCase };