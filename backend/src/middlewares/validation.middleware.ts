import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';

import { HTTPCode } from '~/enums/enums.js';

const validateData =
  (schema: z.ZodObject<any, any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: issue.message,
        }));
        res
          .status(HTTPCode.BAD_REQUEST)
          .json({ error: 'Invalid data', details: errorMessages });
      } else {
        res
          .status(HTTPCode.INTERNAL_SERVER_ERROR)
          .json({ error: 'Internal server error' });
      }
    }
  };

export { validateData };
