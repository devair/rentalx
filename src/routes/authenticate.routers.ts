import { AuthenticateUserController } from "@modules/accounts/userCase/authenticateUser/AuthenticateUserController";
import { Router } from "express";

const authenticateRouters = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRouters.post('/sessions', authenticateUserController.handle);

export { authenticateRouters };