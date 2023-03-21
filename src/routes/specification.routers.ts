import { Router } from 'express';
import {CreateSpecificationController} from '../modules/cars/userCases/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '../modules/cars/userCases/listSpecification/ListSpecificationController';


const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();

const listSpecificationController = new ListSpecificationController();

specificationsRouter.post('/', createSpecificationController.handle);

specificationsRouter.get('/', listSpecificationController.handle);

export { specificationsRouter };