import { DotEnvError } from './dotenv.error.js';

const API_ORIGIN_URL = import.meta.env['VITE_APP_API_ORIGIN_URL'] as string;

if (!API_ORIGIN_URL) {
  throw new DotEnvError('Missing some environment variable');
}

const config = {
  API_ORIGIN_URL,
};

export { config };
