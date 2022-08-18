import { z } from 'zod';

const IVehicleZodSchema = z.object({
  model: z.string().min(3, {
    message: 'Model must be at least 3 characters long',
  }),
  year: z.number().int().gte(1900, {
    message: 'Year must be an integer between 1900 and 2022',
  }).lte(2022, {
    message: 'Year must be an integer between 1900 and 2022',
  }),
  color: z.string().min(3, {
    message: 'Color must be at least 3 characters long',
  }),
  status: z.boolean({
    invalid_type_error: 'Status must be a boolean',
  }).optional(),
  buyValue: z.number({
    invalid_type_error: 'Value must be an integer',
  }).int(),
});

export type IVehicle = z.infer<typeof IVehicleZodSchema>;

export { IVehicleZodSchema };