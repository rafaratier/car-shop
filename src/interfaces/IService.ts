export interface IService<T> {
  saveNewVehicle(obj: T): Promise<T>;
  getAllVehicles(): Promise<T[]>;
  getVehicleById(_id: string): Promise<T | null>;
  updateVehicleById(_id: string, obj: T): Promise<T | null>;
  deleteVehicleById(_id: string): Promise<T | null>;
}