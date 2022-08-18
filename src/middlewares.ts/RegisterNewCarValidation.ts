import { NextFunction, Request, Response } from 'express';
import { ICarZodSchema } from '../interfaces/ICar';
import HttpExceptions from '../utils/HttpExceptions';

class RegisterNewCarValidation {
  public static validateNewCar = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    if (Object.keys(req.body).length === 0) {
      next(HttpExceptions
        .badRequest({ message: 'Data from vehicle is required' }));
      return;
    }

    const parsed = ICarZodSchema.safeParse(req.body);
    console.log(req.body);

    if (!parsed.success) {
      const zodErrorMessage = parsed.error.issues[0].message;

      next(HttpExceptions.badRequest({ message: zodErrorMessage }));
      return;
    }

    next();
  };
}

export default RegisterNewCarValidation;