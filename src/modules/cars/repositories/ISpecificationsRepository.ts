import { Specification } from "../entities/Specification";

interface ISpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {

    create({ name, description }: ISpecificationDTO ): Promise<void>;

    findByName(name: string): Promise<Specification>;
    
    list(): Promise<Specification[]>;

}

export { ISpecificationsRepository, ISpecificationDTO };