import * as express from 'express';
import createCarController from '../factories/carControllerFactory';

const carRouter = express.Router();

const carController = createCarController();

carRouter.post('/', carController.registerNewCar);

export default carRouter;