import { Router } from 'express';
import UserController from '../../controller/UserController';


const routerUsers = Router();

routerUsers.get('/', new UserController().getAll);

export default routerUsers;