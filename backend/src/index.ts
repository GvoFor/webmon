import express from 'express';
import cors from 'cors';
import { mainRouter } from './main-router.js';
import { config } from './config/config.js';
import { httpLoggerMiddleware } from './middlewares/middlewares.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.use(httpLoggerMiddleware);

app.use('/api/v1', mainRouter);

app.listen(config.APP_PORT, config.APP_HOST, () => {
  console.log(
    `Backend listening on http://${config.APP_HOST}:${config.APP_PORT}`,
  );
});
