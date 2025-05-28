import { Router } from 'express';
import { authRouter, monitorScriptsRouter } from '~/modules/modules.js';

const router = Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.use('/auth', authRouter);
router.use('/monitor-scripts', monitorScriptsRouter);

export { router as mainRouter };
