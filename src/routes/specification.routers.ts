import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRouter = Router();

const specificationsRepository = new SpecificationRepository();

specificationsRouter.post('/', (request, response) => {
    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(specificationsRepository);

    try{
        createSpecificationService.execute({ name, description });
    }
    catch(ex){
        return response.status(400).json({ error: ex.message });
    }

    return response.status(201).send();
});

specificationsRouter.get('/', (request, response) => {
    const all = specificationsRepository.list();

    return response.status(200).json(all);
});

export { specificationsRouter };