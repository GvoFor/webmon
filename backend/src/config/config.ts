import { configDotenv } from 'dotenv';
import { DotEnvError } from './dotenv.error.js';

configDotenv();

const APP_HOST = process.env['HOST'];
const APP_PORT = process.env['PORT'];
const DB_CLIENT = process.env['DB_CLIENT'];
const DB_CONNECTION_STRING = process.env['DB_CONNECTION_STRING'];
const ENC_SALT_ROUNDS = process.env['ENC_SALT_ROUNDS'];
const JWT_EXPIRATION_TIME = process.env['JWT_EXPIRATION_TIME'];
const JWT_ALGORITHM = process.env['JWT_ALGORITHM'];
const JWT_SECRET = process.env['JWT_SECRET'];

if (
  !APP_HOST ||
  !APP_PORT ||
  !DB_CLIENT ||
  !DB_CONNECTION_STRING ||
  !ENC_SALT_ROUNDS ||
  !JWT_EXPIRATION_TIME ||
  !JWT_ALGORITHM ||
  !JWT_SECRET
) {
  throw new DotEnvError('Missing some environment variable');
}

const config = {
  APP_HOST,
  APP_PORT: Number(APP_PORT),
  DB_CLIENT,
  DB_CONNECTION_STRING,
  ENC_SALT_ROUNDS: Number(ENC_SALT_ROUNDS),
  JWT_EXPIRATION_TIME,
  JWT_ALGORITHM,
  JWT_SECRET,
};

export { config };
