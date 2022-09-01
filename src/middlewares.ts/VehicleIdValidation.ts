import { NextFunction, Request, Response } from 'express';
import HttpExceptions from '../utils/HttpExceptions';

class VehicleIdValidation {
  public static validateId = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { id } = req.params;

    if (id.length < 24) {
      next(HttpExceptions
        .badRequest({ error: 'Id must have 24 hexadecimal characters' }));
      return;
    }

    next();
  };
}

export default VehicleIdValidation;