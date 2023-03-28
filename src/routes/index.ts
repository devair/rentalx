import { Router } from "express";
import { categoriesRoutes } from './categories.routers';
import { specificationsRouters } from './specification.routers';
import { usersRouters } from "./users.routers";

const router = Router();

router.use('/categories', categoriesRoutes);

router.use('/specifications', specificationsRouters);

router.use('/users', usersRouters);

export { router };