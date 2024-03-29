import { getRepository, Repository } from "typeorm";
import { ISpecificationDTO, ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { Specification } from "@modules/cars/entities/Specification";

class SpecificationsRepository implements ISpecificationsRepository {

    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }
    
    async create({ name, description }: ISpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            name,
            description
        });

        await this.repository.save(specification);

    }

    async list(): Promise<Specification[]> {
        const specifications = await this.repository.find();
        return specifications;
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({ name });
        return specification;
    }
}

export { SpecificationsRepository };