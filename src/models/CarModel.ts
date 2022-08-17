import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carModelSchema = new Schema<ICar>({
  doorsQty: { type: Number, required: true },
  seatsQty: { type: Number, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  buyValue: { type: Number, required: true },
  status: { type: Boolean },
}, { versionKey: false });

class CarModel extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carModelSchema)) {
    super(model);
  }
}

export default CarModel;