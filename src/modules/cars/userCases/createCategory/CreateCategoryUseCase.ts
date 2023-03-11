
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 * [x] definir tipo de retorno
 * [x] alterar o retorno do erro
 * [x] acessar o repositorio
 * [x] retornar algo
 */
class CreateCategoryUseCase {

    private categoriesRepository : ICategoriesRepository;

    constructor(repository: ICategoriesRepository){
        this.categoriesRepository = repository
    }

    execute( { name, description } : IRequest): void {

        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists){
            throw new Error('Category already exists');
        }
    
        this.categoriesRepository.create({ name, description });
    }

}

export { CreateCategoryUseCase };