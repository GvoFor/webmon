import { Router } from 'express';
import { validateData } from '~/middlewares/validation.middleware.js';
import {
  signInValidationSchema,
  signUpValidationSchema,
} from './validation-schemas.js';
import { controller } from './controller.js';
import { authorizationMiddleware } from '~/middlewares/middlewares.js';

const router = Router();

router.get('/', authorizationMiddleware, controller.getUser);

router.post(
  '/sign-up',
  validateData(signUpValidationSchema),
  controller.signUp,
);

router.post(
  '/sign-in',
  validateData(signInValidationSchema),
  controller.signIn,
);

export { router };
