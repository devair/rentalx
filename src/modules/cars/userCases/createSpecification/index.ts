import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

export default (): CreateSpecificationController => {
    
    const specicationRepository = new SpecificationRepository();
    const createSpecificationUseCase = new CreateSpecificationUseCase(specicationRepository);
    const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

    return createSpecificationController;
}

