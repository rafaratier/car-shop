import * as express from 'express';
import createCarController from '../factories/carControllerFactory';
import RegisterNewCarValidation
  from '../middlewares.ts/RegisterNewCarValidation';

const carRouter = express.Router();

const carController = createCarController();

carRouter.post(
  '/',
  RegisterNewCarValidation.validateNewCar,
  carController.registerNewCar,
);

export default carRouter;