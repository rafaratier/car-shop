import CarController from '../controllers/CarController';
import CarModel from '../models/CarModel';
import CarService from '../services/CarService';

const createCarController = () => {
  const carModel = new CarModel();

  const carService = new CarService(carModel);

  return new CarController(carService);
};

export default createCarController;