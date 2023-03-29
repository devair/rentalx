import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/userCase/createUser/CreateUserController";
import { ListUsersController } from "../modules/accounts/userCase/listUsers/ListUsersController";


const usersRouters = Router();

const createUserController = new CreateUserController();

const listUsersController = new ListUsersController();

usersRouters.use(ensureAuthenticated);

usersRouters.post('/', createUserController.handle);

usersRouters.get('/', listUsersController.handle)

export { usersRouters };