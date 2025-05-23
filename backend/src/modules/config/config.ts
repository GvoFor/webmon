import { configDotenv } from 'dotenv';
import { DotEnvError } from './dotenv.error.js';

configDotenv();

const APP_HOST = process.env['HOST'];
const APP_PORT = process.env['PORT'];

if (!APP_HOST || !APP_PORT) {
  throw new DotEnvError('Missing some environment variable');
}

const config = {
  APP_HOST,
  APP_PORT: Number(APP_PORT),
};

export { config };
