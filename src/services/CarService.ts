import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

class CarService implements IService<ICar> {
  private _carModel: IModel<ICar>;

  constructor(CarModel: IModel<ICar>) {
    this._carModel = CarModel;
  }

  public async saveNewVehicle(obj: ICar): Promise<ICar> {
    return this._carModel.create(obj);
  }

  public async getVehicleById(_id: string): Promise<ICar | null> {
    const car = await this._carModel.readOne(_id);

    return car;
  }

  public async getAllVehicles(): Promise<ICar[] | null> {
    const allCars = await this._carModel.read();

    return allCars;
  }

  public async updateVehicleById(_id: string, obj: ICar): Promise<ICar | null> {
    const updatedCar = this._carModel.update(_id, obj);

    return updatedCar;
  }

  public async deleteVehicleById(_id: string): Promise<ICar | null> {
    return this._carModel.delete(_id);
  }
}

export default CarService;