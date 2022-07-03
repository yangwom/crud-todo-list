import { Router } from 'express';
import routerUsers from './routerUsers';

const router = Router();

router.use('/users', routerUsers);

export default router;