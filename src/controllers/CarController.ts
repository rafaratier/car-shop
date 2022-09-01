import { NextFunction, Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';
import HttpExceptions from '../utils/HttpExceptions';

class CarController {
  private _carService: IService<ICar>;
  private OBJECT_NOT_FOUND_ERR_MSG = 'Object not found';

  constructor(CarService: IService<ICar>) {
    this._carService = CarService;
  }

  public registerNewCar = async (req: Request, res: Response) => {
    const { model, year, color, buyValue, doorsQty, seatsQty } = req.body;
    const newCar = await this._carService.saveNewVehicle({
      model,
      year,
      color,
      buyValue,
      doorsQty,
      seatsQty,
    });

    return res.status(201).json(newCar);
  };

  public getAllVehicles = async (
    req: Request,
    res: Response,
  ) => {
    const allCars = await this._carService.getAllVehicles();
    return res.status(200).json(allCars);
  };

  public getVehicleById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { id } = req.params;

    const foundCar = await this._carService.getVehicleById(id);

    if (!foundCar) {
      next(HttpExceptions.notFound({ error: this.OBJECT_NOT_FOUND_ERR_MSG }));
      return;
    }

    return res.status(200).json(foundCar);
  };

  public updateVehicleById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { id } = req.params;

    if (!req.body || Object.keys(req.body).length === 0) {
      next(HttpExceptions
        .badRequest({ error: 'Data to be updated is required' }));
      return;
    }

    const updatedCar = await this._carService.updateVehicleById(id, req.body);

    if (!updatedCar) {
      next(HttpExceptions.notFound({ error: this.OBJECT_NOT_FOUND_ERR_MSG }));
      return;
    }

    return res.status(200).json(updatedCar);
  };

  public deleteVehicleById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { id } = req.params;
    const deletedCar = await this._carService.deleteVehicleById(id);

    if (!deletedCar) {
      next(HttpExceptions.notFound({ error: this.OBJECT_NOT_FOUND_ERR_MSG }));
      return;
    }

    return res.status(204).end();
  };
}

export default CarController;