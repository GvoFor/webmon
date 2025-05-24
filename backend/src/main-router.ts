import { Router } from 'express';
import { authRouter } from '~/modules/modules.js';

const router = Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.use('/auth', authRouter);

export { router as mainRouter };
