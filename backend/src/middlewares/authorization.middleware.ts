import { Request, Response, NextFunction } from 'express';
import { HTTPCode } from '~/enums/enums.js';
import { getAuthTokenPayload } from '~/helpers/helpers.js';

const authorizationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const tokenPayload = await getAuthTokenPayload(req);

  if ('errorMessage' in tokenPayload) {
    res.status(HTTPCode.UNAUTHORIZED).json({
      status: HTTPCode.UNAUTHORIZED,
      message: tokenPayload.errorMessage,
    });
    return;
  }

  req.userId = tokenPayload.userId;

  next();
};

export { authorizationMiddleware };
