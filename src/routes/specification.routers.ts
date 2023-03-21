import { Router } from 'express';
import createSpecificationController from '../modules/cars/userCases/createSpecification/';
import listSpecificationController from '../modules/cars/userCases/listSpecification';

const specificationsRouter = Router();

specificationsRouter.post('/', (request, response) => {    

    return createSpecificationController().handle(request, response);
});

specificationsRouter.get('/', (request, response) => {   
    
    return listSpecificationController().handle(request, response);
});

export { specificationsRouter };