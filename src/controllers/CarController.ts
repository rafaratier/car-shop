import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

class CarController {
  private _carService: IService<ICar>;

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

  public getAllVehicles = async (req: Request, res: Response) => {
    const allCars = await this._carService.getAllVehicles();
    return res.status(200).json(allCars);
  };

  public getVehicleById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const foundCar = await this._carService.getVehicleById(id);

    return res.status(200).json(foundCar);
  };

  public updateVehicleById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const updatedCar = await this._carService.updateVehicleById(id, req.body);

    return res.status(200).json(updatedCar);
  };

  public deleteVehicleById = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._carService.deleteVehicleById(id);

    return res.status(204).end();
  };
}

export default CarController;