import * as express from 'express';
import createCarController from '../factories/carControllerFactory';
import RegisterNewCarValidation
  from '../middlewares.ts/RegisterNewCarValidation';
import VehicleIdValidation from '../middlewares.ts/VehicleIdValidation';

const carRouter = express.Router();

const carController = createCarController();

carRouter.post(
  '/',
  RegisterNewCarValidation.validateNewCar,
  carController.registerNewCar,
);

carRouter.get('/', carController.getAllVehicles);

carRouter.get(
  '/:id',
  VehicleIdValidation.validateId,
  carController.getVehicleById,
);

carRouter.put(
  '/:id',
  VehicleIdValidation.validateId,
  carController.updateVehicleById,
);

carRouter.delete(
  '/:id',
  VehicleIdValidation.validateId,
  carController.deleteVehicleById,
);

export default carRouter;