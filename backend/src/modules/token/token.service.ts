import { jwtVerify, type JWTPayload, SignJWT } from 'jose';
import { config } from '~/config/config.js';

const secret = new TextEncoder().encode(config.JWT_SECRET);

const create = async (payload: JWTPayload) => {
  const token = new SignJWT(payload)
    .setProtectedHeader({ alg: config.JWT_ALGORITHM })
    .setIssuedAt();

  token.setExpirationTime(config.JWT_EXPIRATION_TIME);

  return await token.sign(secret);
};

const verify = async (token: string) => {
  const { payload } = await jwtVerify(token, secret);

  return payload;
};

const tokenService = {
  create,
  verify,
};

export { tokenService };
