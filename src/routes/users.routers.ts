import { Router } from "express";
import { CreateUserController } from "@modules/accounts/userCase/createUser/CreateUserController";
import { ListUsersController } from "@modules/accounts/userCase/listUsers/ListUsersController";
import { UpdateUserAvatarController } from "@modules/accounts/userCase/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "middleware/ensureAuthenticated";
import multer from "multer";
import uploadConfig from "../config/upload";


const usersRouters = Router();

const createUserController = new CreateUserController();

const listUsersController = new ListUsersController();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'))

const updateUserAvatarController = new UpdateUserAvatarController();

usersRouters.use(ensureAuthenticated);

usersRouters.post('/', createUserController.handle);

usersRouters.get('/', listUsersController.handle)

usersRouters.patch('/avatar', uploadAvatar.single('avatar'),updateUserAvatarController.handle);

export { usersRouters };