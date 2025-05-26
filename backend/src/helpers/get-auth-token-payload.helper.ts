import { type Request } from 'express';
import { type AuthTokenPayload } from '~/modules/auth/types/types.js';
import { tokenService } from '~/modules/token/token.js';

type ReturnType = AuthTokenPayload | { errorMessage: string };

const getAuthTokenPayload = async (req: Request): Promise<ReturnType> => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { errorMessage: 'Not authorized' };
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return { errorMessage: 'Invalid token provided' };
  }

  const { userId } = await tokenService.verify<AuthTokenPayload>(token);
  if (!userId) {
    return { errorMessage: 'Invalid token provided' };
  }

  return { userId };
};

export { getAuthTokenPayload };
