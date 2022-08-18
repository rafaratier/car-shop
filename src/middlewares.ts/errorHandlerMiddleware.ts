import { NextFunction, Request, Response } from 'express';
import HttpExceptions from '../utils/HttpExceptions';

function errorHandlerMiddleware(
  err: HttpExceptions,
  req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof HttpExceptions) {
    res.status(err.code).json(err.message);
    return;
  }

  res.status(500).json('Oops! Something went wrong!');
}

export default errorHandlerMiddleware;