import { Router } from 'express';

const routes = new Router();

import UserController from './app/controllers/UserController';
import RoomController from './app/controllers/RoomController';

routes.post('/users', UserController.store);
routes.post('/rooms', RoomController.store);
routes.get('/rooms', RoomController.index);
routes.get('/rooms/:roomId', RoomController.show);
routes.put('/rooms/:roomId', RoomController.update);

export default routes;
