import { jwtVerify, type JWTPayload, SignJWT } from 'jose';
import { config } from '~/config/config.js';

const secret = new TextEncoder().encode(config.JWT_SECRET);

const create = async <T extends JWTPayload>(payload: T) => {
  const token = new SignJWT(payload)
    .setProtectedHeader({ alg: config.JWT_ALGORITHM })
    .setIssuedAt();

  token.setExpirationTime(config.JWT_EXPIRATION_TIME);

  return await token.sign(secret);
};

const verify = async <T extends JWTPayload>(token: string): Promise<T> => {
  const { payload } = await jwtVerify(token, secret);

  return payload as T;
};

const tokenService = {
  create,
  verify,
};

export { tokenService };
