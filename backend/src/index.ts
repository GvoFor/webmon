import express from 'express';
import cors from 'cors';
import { mainRouter } from './main-router.js';
import { config } from './config/config.js';
import {
  errorHandlerMiddleware,
  httpLoggerMiddleware,
  removeTrailingSlash,
} from './middlewares/middlewares.js';
import { loggerService } from './modules/logger/logger.js';
import { startMonitoring } from './modules/monitor-scripts-executor/monitor-scripts-executor.js';
import process from 'process';
import { db } from './database/database.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(removeTrailingSlash);

const staticPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../public',
);

app.use(express.static(staticPath));

app.use(httpLoggerMiddleware);

app.use('/api/v1', mainRouter);

app.use(errorHandlerMiddleware);

app.get('*"index"', (_, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

const monitoringJob = startMonitoring(config.MONITOR_ON_STARTUP);

const server = app.listen(config.APP_PORT, config.APP_HOST, () => {
  loggerService.info(
    `Backend listening on http://${config.APP_HOST}:${config.APP_PORT}`,
  );
});

const shutdown = async () => {
  loggerService.info('Disconecting from database');
  await db.destroy();

  loggerService.info('Stopping monitoring job');
  await monitoringJob.stop();

  loggerService.info('Closing server');
  server.close(() => {
    loggerService.info('Express server closed');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
