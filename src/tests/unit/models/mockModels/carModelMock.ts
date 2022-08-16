import { ICar } from "../../../../interfaces/ICar";

const carMock: ICar = {
  model: 'Ferrari 458 Italia',
  year: 2015,
  color: 'red',
  buyValue: 270000000,
  doorsQty: 2,
  seatsQty: 2,
  status: true,
}

const carMockWithId: ICar & { _id: string } = {
  _id: '34cc2gt985251q91oba00tf',
  model: 'Ferrari 458 Italia',
  year: 2015,
  color: 'red',
  buyValue: 270000000,
  doorsQty: 2,
  seatsQty: 2,
  status: true,
}

export {
  carMock,
  carMockWithId
};