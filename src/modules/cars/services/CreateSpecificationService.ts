import { ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {

    private specificationRepository: ISpecificationRepository;

    constructor(repository: ISpecificationRepository) {
        this.specificationRepository = repository;
    }

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error('Specification already exists');
        }

        this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationService };