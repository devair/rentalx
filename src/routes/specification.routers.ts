import { Router } from 'express';
import {CreateSpecificationController} from '../modules/cars/userCases/createSpecification/CreateSpecificationController';
import listSpecificationController from '../modules/cars/userCases/listSpecification';

const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRouter.post('/', createSpecificationController.handle);

specificationsRouter.get('/', (request, response) => {   
    
    return listSpecificationController().handle(request, response);
});

export { specificationsRouter };