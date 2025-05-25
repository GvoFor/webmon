import { Request, Response, NextFunction } from 'express';
import { HTTPCode } from '~/enums/enums.js';
import { tokenService } from '~/modules/token/token.service.js';

const authorizationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res
      .status(HTTPCode.UNAUTHORIZED)
      .json({ error: 'Authorization header missing or invalid' });
    return;
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    res.status(HTTPCode.UNAUTHORIZED).json({ error: 'Token not provided' });
    return;
  }

  const { userId } = await tokenService.verify(token);
  if (!userId) {
    res.status(HTTPCode.UNAUTHORIZED).json({ error: 'Invalid token provided' });
    return;
  }

  req.userId = userId as number;

  next();
};

export { authorizationMiddleware };
