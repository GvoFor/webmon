import { NextFunction, Request, Response } from 'express';
import { HTTPCode } from '~/enums/enums.js';
import { HTTPError } from '~/errors/errors.js';

const errorHandlerMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  const status =
    error instanceof HTTPError ? error.status : HTTPCode.INTERNAL_SERVER_ERROR;
  const message = (error as Error).message;

  res.status(status).json({ status, message });
};

export { errorHandlerMiddleware };
