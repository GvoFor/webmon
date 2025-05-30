import express from 'express';
import cors from 'cors';
import { mainRouter } from './main-router.js';
import { config } from './config/config.js';
import {
  errorHandlerMiddleware,
  httpLoggerMiddleware,
} from './middlewares/middlewares.js';
import { loggerService } from './modules/logger/logger.js';
import { startMonitoring } from './modules/monitor-scripts-executor/monitor-scripts-executor.js';
import process from 'process';
import { db } from './database/database.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use(httpLoggerMiddleware);

app.use('/api/v1', mainRouter);

app.use(errorHandlerMiddleware);

const monitoringJob = startMonitoring(config.MONITOR_ON_STARTUP);

const server = app.listen(config.APP_PORT, config.APP_HOST, () => {
  loggerService.info(
    `Backend listening on http://${config.APP_HOST}:${config.APP_PORT}`,
  );
});

// TODO: make sure this works
const shutdown = async () => {
  console.log('Disconecting from database');
  await db.destroy();

  console.log('Stopping monitoring job');
  await monitoringJob.stop();

  console.log('Closing server');
  server.close(() => {
    console.log('Express server closed');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Forcefully shutting down');
    process.exit(1);
  }, 5000);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
