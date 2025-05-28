import { Router } from 'express';
import {
  authorizationMiddleware,
  validateData,
} from '~/middlewares/middlewares.js';
import { controller } from './controller.js';
import { createReportValidationSchema } from './validation-schemas.js';

const router = Router();

router.use(authorizationMiddleware);

router.get('/reports', controller.getReports);
router.post(
  '/reports',
  validateData(createReportValidationSchema),
  controller.createReport,
);

export { router };
