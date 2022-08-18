import { z } from 'zod';
import { IVehicleZodSchema } from './IVehicle';

// ref: how to extend a zod schema => https://github.com/colinhacks/zod#extend
const ICarZodSchema = IVehicleZodSchema.extend({
  seatsQty: z.number().int().gte(2, {
    message: 'Seat\'s quantity must be between 2 and 7',
  }).lte(7, {
    message: 'Seat\'s quantity must be between 2 and 7',
  }),
  doorsQty: z.number().int().gte(2, {
    message: 'Door\'s quantity must be between 2 and 4',
  }).lte(4, {
    message: 'Door\'s quantity must be between 2 and 4',
  }),
});

export type ICar = z.infer<typeof ICarZodSchema>;

export { ICarZodSchema };