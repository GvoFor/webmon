import { NextFunction, Request, Response } from 'express';
import { loggerService } from '~/modules/logger/logger.js';

const httpLoggerMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const message = `${req.method.toUpperCase()} ${req.path}`;
  loggerService.info(message);
  next();
};

export { httpLoggerMiddleware };
