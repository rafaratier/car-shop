import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import CarModel from '../../../models/CarModel';
import { carMock, carMockList, carMockForUpdatedCar, carMockWithId } from './mockModels/carModelMock';

const { expect } = chai;

describe('Test CarModel', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves(carMockList);
    sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockForUpdatedCar);
  });

  after(() => {
    sinon.restore();
  })

  describe("CREATE - tests if it's possible to register a new car", () => {

    it('by passing the correct args', async () => {
      const newCar = await carModel.create(carMock);

      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

  describe("FIND_ONE - tests if it's possible to find registry of a car", () => {

    it('by passing the correct _id as args', async () => {
      const carFound = await carModel.readOne('62261a65d66c6be0a63c051f');

      expect(carFound).to.be.deep.equal(carMockWithId);
    });
  });

  describe("FIND - tests if it's possible to find all registries of cars", () => {

    it('by calling method "read"', async () => {
      const allCarsFound = await carModel.read();

      expect(allCarsFound).to.be.deep.equal(carMockList);
    });
  });

  describe("FIND_BY_ID_AND_UPDATE - tests if it's possible to update the registry of a car", () => {

    it('by passing the correct args', async () => {
      const updatedCar = await carModel.update('62261a65d66c6be0a63c051f', carMock);

      expect(updatedCar).to.be.deep.equal(carMockForUpdatedCar);
    });
  });

});