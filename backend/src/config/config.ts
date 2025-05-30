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
const LOG_LEVEL = process.env['LOG_LEVEL'];
const MONITOR_SCHEDULE = process.env['MONITOR_SCHEDULE'];
const MONITOR_ON_STARTUP = process.env['MONITOR_ON_STARTUP'];

if (
  !APP_HOST ||
  !APP_PORT ||
  !DB_CLIENT ||
  !DB_CONNECTION_STRING ||
  !ENC_SALT_ROUNDS ||
  !JWT_EXPIRATION_TIME ||
  !JWT_ALGORITHM ||
  !JWT_SECRET ||
  !MONITOR_SCHEDULE
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
  LOG_LEVEL,
  MONITOR_SCHEDULE,
  MONITOR_ON_STARTUP: MONITOR_ON_STARTUP === 'true',
};

export { config };
