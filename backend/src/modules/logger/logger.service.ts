import { pino } from 'pino';
import { config } from '~/config/config.js';
import {} from 'pino-pretty';

const logger = pino({
  level: config.LOG_LEVEL || 'info',
  timestamp: pino.stdTimeFunctions.isoTime,
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'yyyy-mm-dd HH:MM:ss.l',
    },
  },
});

const debug = (message: string): void => {
  logger.debug(message);
};

const info = (message: string): void => {
  logger.info(message);
};

const warn = (message: string): void => {
  logger.warn(message);
};

const error = (message: string): void => {
  logger.error(message);
};

const service = {
  debug,
  info,
  warn,
  error,
};

export { service };
