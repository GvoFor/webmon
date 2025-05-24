import { Router } from 'express';
import { validateData } from '~/middlewares/validation.middleware.js';
import {
  signInValidationSchema,
  signUpValidationSchema,
} from './validation-schemas.js';
import { controller } from './controller.js';

const router = Router();

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
