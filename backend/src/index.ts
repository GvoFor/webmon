import express from 'express';
import cors from 'cors';
import { config } from './modules/modules.js';

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
  res.send('<h1>Hello from backend</h1>');
});

app.listen(config.APP_PORT, config.APP_HOST, () => {
  console.log(
    `Backend listening on http://${config.APP_HOST}:${config.APP_PORT}`,
  );
});
