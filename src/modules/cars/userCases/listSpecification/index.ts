import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

export default (): ListSpecificationController =>{

    const ISpecificationRepository = new SpecificationRepository();
    const listSpecificationUseCase = new ListSpecificationUseCase(ISpecificationRepository);
    const listSpecificationController = new ListSpecificationController(listSpecificationUseCase);
    
    return listSpecificationController;

}
