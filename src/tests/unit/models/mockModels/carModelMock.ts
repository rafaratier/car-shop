import { ICar } from "../../../../interfaces/ICar";

const carMock: ICar = {
  model: 'Ferrari 458 Italia',
  year: 2015,
  color: 'red',
  buyValue: 270000000,
  doorsQty: 2,
  seatsQty: 2,
  status: true,
};

const carMockWithId: ICar & { _id: string } = {
  _id: '62261a65d66c6be0a63c051f',
  model: 'Ferrari 458 Italia',
  year: 2015,
  color: 'red',
  buyValue: 270000000,
  doorsQty: 2,
  seatsQty: 2,
  status: true,
};

const carMockList: ICar[] & { _id: string }[] = [
  {
    _id: '62261a65d66c6be0a63c051f',
    model: 'Ferrari 458 Italia',
    year: 2015,
    color: 'red',
    buyValue: 270000000,
    doorsQty: 2,
    seatsQty: 2,
    status: true,
  },
  {
    _id: '1097a65d77c2be0a63c091p',
    model: 'Ferrari F8 Tributo',
    year: 2015,
    color: 'red',
    buyValue: 419257400,
    doorsQty: 2,
    seatsQty: 2,
    status: true,
  }
];

export {
  carMock,
  carMockWithId,
  carMockList
};