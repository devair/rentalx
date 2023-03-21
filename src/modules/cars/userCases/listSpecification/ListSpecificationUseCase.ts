import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";


class ListSpecificationUseCase{

    constructor(private specificationRepository: ISpecificationRepository){}

    async execute(): Promise<Specification[]> {
        return await this.specificationRepository.list();
    }
} 

export { ListSpecificationUseCase };