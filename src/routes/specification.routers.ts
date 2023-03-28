import { Router } from 'express';
import {CreateSpecificationController} from '../modules/cars/userCases/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '../modules/cars/userCases/listSpecification/ListSpecificationController';


const specificationsRouters = Router();

const createSpecificationController = new CreateSpecificationController();

const listSpecificationController = new ListSpecificationController();

specificationsRouters.post('/', createSpecificationController.handle);

specificationsRouters.get('/', listSpecificationController.handle);

export { specificationsRouters };