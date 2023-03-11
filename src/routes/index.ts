import { Router } from "express";
import { categoriesRoutes } from './categories.routers';
import { specificationsRouter } from './specification.routers';

const router = Router();

router.use('/categories', categoriesRoutes);

router.use('/specifications', specificationsRouter);

export { router };