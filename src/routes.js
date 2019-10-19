import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.get('/students/:id', StudentController.index);
routes.get('/students/', StudentController.show);
routes.post('/students', StudentController.store);

export default routes;
