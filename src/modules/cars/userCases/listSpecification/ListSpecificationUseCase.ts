import { Specification } from "@modules/cars/entities/Specification";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSpecificationUseCase{

    constructor(
        @inject('SpecificationsRepository')
        private specificationRepository: ISpecificationsRepository
    ){}

    async execute(): Promise<Specification[]> {
        return await this.specificationRepository.list();
    }
} 

export { ListSpecificationUseCase };