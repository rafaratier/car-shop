import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import CarModel from '../../../models/CarModel';
import { carMock, carMockWithId } from './mockModels/carModelMock';

const { expect } = chai;

describe('Test CarModel', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
  });

  after(() => {
    sinon.restore();
  })

  describe("CREATE - tests if it's possible to register a new car", () => {

    it('by passing the rigth args', async () => {
      const newCar = await carModel.create(carMock);

      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

  describe("FIND_ONE - tests if it's possible to find registry of a car", () => {

    it('by passing the rigth _id as args', async () => {
      const carFound = await carModel.readOne('62261a65d66c6be0a63c051f');

      expect(carFound).to.be.deep.equal(carMockWithId);
    });
  });

});