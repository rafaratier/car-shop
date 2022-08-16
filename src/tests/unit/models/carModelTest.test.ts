import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import CarModel from '../models/CarModel';
import { carMock, carMockWithId } from './mockModels/carModelMock';

const { expect } = chai;

describe('Test CarModel', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon
      .stub(Model, 'create').resolves();
  });

  after(() => {
    sinon.restore();
  })

  describe("tests if it's possible to register a new car", () => {

    it('by passing the rigth args', async () => {
      const newCar = await carModel.create(carMock);

      expect(newCar).to.be.deep.equal(carMockWithId);
    });
  });

});