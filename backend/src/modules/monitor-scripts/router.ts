import { Router } from 'express';
import {
  authorizationMiddleware,
  validateData,
} from '~/middlewares/middlewares.js';
import { controller } from './controller.js';
import {
  createReportValidationSchema,
  patchReportValidationSchema,
  createScriptValidationSchema,
  patchScriptValidationSchema,
} from './validation-schemas.js';

const router = Router();

router.use(authorizationMiddleware);

router.get('/', controller.getScripts);

router.post(
  '/',
  validateData(createScriptValidationSchema),
  controller.createScript,
);

router.patch(
  '/:id',
  validateData(patchScriptValidationSchema),
  controller.patchScript,
);

router.delete('/:id', controller.deleteScript);

router.get('/reports', controller.getReports);

router.post(
  '/reports',
  validateData(createReportValidationSchema),
  controller.createReport,
);

router.patch(
  '/reports/:id',
  validateData(patchReportValidationSchema),
  controller.patchReport,
);

router.patch(
  '/reports',
  validateData(patchReportValidationSchema),
  controller.patchReportBulk,
);

router.delete('/reports/:id', controller.deleteReport);

export { router };
