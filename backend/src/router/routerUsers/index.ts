import { Router } from 'express';
import UserController from '../../controller/UserController';
import userValidate from '../../middleware/userValidate';


const routerUsers = Router();

routerUsers.get('/', new UserController().getAll);
routerUsers.post('/', userValidate, new UserController().create);

export default routerUsers;