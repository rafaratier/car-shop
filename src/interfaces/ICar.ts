import { z } from 'zod';
import { IVehicleZodSchema } from './IVehicle';

// ref: how to extend a zod schema => https://github.com/colinhacks/zod#extend
const ICarZodSchema = IVehicleZodSchema.extend({
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().int().gte(2).lte(7),
});

export type ICar = z.infer<typeof ICarZodSchema>;

export { ICarZodSchema };