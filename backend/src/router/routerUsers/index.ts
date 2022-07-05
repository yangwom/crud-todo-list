import { Router } from 'express';
import UserController from '../../controller/UserController';
import userValidate from '../../middleware/userValidate';
import authMiddleware from '../../middleware/validateToken';


const routerUsers = Router();

routerUsers.get('/', authMiddleware, new UserController().getAll);
routerUsers.get('/:id',authMiddleware, new UserController().getById);
routerUsers.post('/', authMiddleware, userValidate, new UserController().create);
routerUsers.delete('/:id',authMiddleware, new UserController().delete);

export default routerUsers;