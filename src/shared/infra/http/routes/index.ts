import { Router } from "express";
import { authenticateRouters } from "./authenticate.routers";
import { categoriesRoutes } from './categories.routers';
import { specificationsRouters } from './specification.routers';
import { usersRouters } from "./users.routers";

const router = Router();

router.use('/categories', categoriesRoutes);

router.use('/specifications', specificationsRouters);

router.use('/users', usersRouters);

router.use(authenticateRouters);

export { router };