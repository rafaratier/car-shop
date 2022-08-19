import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/CarModel';
import { carMock, carMockList, carMockForUpdatedCar, carMockWithId } from '../mocks/carModelMock';
import CarService from '../../../services/CarService';

const { expect } = chai;

describe('Test CarService', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'readOne').resolves(carMockWithId);
    sinon.stub(carModel, 'read').resolves(carMockList);
    sinon.stub(carModel, 'update').resolves(carMockForUpdatedCar);
    sinon.stub(carModel, 'delete').resolves(carMockWithId);
  });

  after(() => {
    sinon.restore();
  })

  describe("SAVE_NEW_VEHICLE - tests if it's possible to register a new car", () => {

    it('by passing the correct args', async () => {
      const newCar = await carService.saveNewVehicle(carMock);

      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

  describe("GET_VEHICLE_BY_ID - tests if it's possible to find registry of a car", () => {

    it('by passing the correct _id as args', async () => {
      const carFound = await carService.getVehicleById('62261a65d66c6be0a63c051f');

      expect(carFound).to.be.deep.equal(carMockWithId);
    });
  });

  describe("GET_ALL_VEHICLES - tests if it's possible to find all registries of cars", () => {

    it('by calling method "getAllVehicles"', async () => {
      const allCarsFound = await carService.getAllVehicles();

      expect(allCarsFound).to.be.deep.equal(carMockList);
    });
  });

  describe("UPDATE_VEHICLE_BY_ID - tests if it's possible to update the registry of a car", () => {

    it('by passing the correct _id as args', async () => {
      const updatedCar = await carService.updateVehicleById('62261a65d66c6be0a63c051f', carMock);

      expect(updatedCar).to.be.deep.equal(carMockForUpdatedCar);
    });
  });

  describe("DELETE_VEHICLE_BY_ID - tests if it's possible to remove the registry of a car", () => {

    it('by passing the correct _id as args', async () => {
      const deletedCar = await carService.deleteVehicleById('62261a65d66c6be0a63c051f');

      expect(deletedCar).to.be.deep.equal(carMockWithId);
    });
  });

});