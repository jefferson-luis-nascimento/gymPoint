import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import EnrollmentController from './app/controllers/EnrollmentController';
import CheckinController from './app/controllers/CheckinController';
import HelpOrderController from './app/controllers/HelpOrderController';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.post('/students/:student_id/checkins', CheckinController.store);
routes.get('/students/:student_id/checkins', CheckinController.index);

routes.post('/students/:student_id/help-orders', HelpOrderController.store);
routes.get('/students/:student_id/help-orders', HelpOrderController.index);

routes.get('/help-orders', HelpOrderController.show);
routes.put('/help-orders/:id/answer', HelpOrderController.update);

routes.use(authMiddleware);
routes.use(adminMiddleware);

routes.get('/students/:id', StudentController.index);
routes.get('/students', StudentController.show);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);
routes.delete('/students/:id', StudentController.delete);

routes.get('/plans/:id', PlanController.index);
routes.get('/plans', PlanController.show);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

routes.get('/enrollments/:id', EnrollmentController.index);
routes.get('/enrollments', EnrollmentController.show);
routes.post('/enrollments', EnrollmentController.store);
routes.put('/enrollments/:id', EnrollmentController.update);
routes.delete('/enrollments/:id', EnrollmentController.delete);

export default routes;
