import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    try {
        createCategoryService.execute({ name, description });
    }
    catch (ex) {
        return response.status(400).json({ error: ex.message });
    }
    return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
    const all = categoriesRepository.list();

    return response.status(200).json(all);
});

export { categoriesRoutes };