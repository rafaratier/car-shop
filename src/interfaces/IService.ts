export interface IService<T> {
  saveNewVehicle(obj: T): Promise<T>;
  getAllVehicles(): Promise<T[] | null>;
  getVehicleById(_id: string): Promise<T | null>;
  updateVehicleById(_id: string, obj: Partial<T>): Promise<T | null>;
  deleteVehicleById(_id: string): Promise<T | null>;
}