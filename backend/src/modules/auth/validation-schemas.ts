import { z } from 'zod';
import { ValidationErrorMessage } from './enums/enums.js';
import {
  EMAIL_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from './consts/consts.js';

const signUpValidationSchema = z.object({
  email: z
    .string({ required_error: ValidationErrorMessage.EMAIL_REQUIRED })
    .email(ValidationErrorMessage.EMAIL_INVALID)
    .min(EMAIL_MIN_LENGTH, ValidationErrorMessage.EMAIL_TOO_SHORT)
    .max(EMAIL_MAX_LENGTH, ValidationErrorMessage.EMAIL_TOO_LONG),
  password: z
    .string({ required_error: ValidationErrorMessage.PASSWORD_REQUIRED })
    .min(PASSWORD_MIN_LENGTH, ValidationErrorMessage.PASSWORD_TOO_SHORT)
    .max(PASSWORD_MAX_LENGTH, ValidationErrorMessage.PASSWORD_TOO_LONG),
  confirmPassword: z
    .string({ required_error: ValidationErrorMessage.PASSWORD_REQUIRED })
    .min(PASSWORD_MIN_LENGTH, ValidationErrorMessage.PASSWORD_TOO_SHORT)
    .max(PASSWORD_MAX_LENGTH, ValidationErrorMessage.PASSWORD_TOO_LONG),
});

const signInValidationSchema = z.object({
  email: z
    .string({ required_error: ValidationErrorMessage.EMAIL_REQUIRED })
    .email(ValidationErrorMessage.EMAIL_INVALID)
    .min(EMAIL_MIN_LENGTH, ValidationErrorMessage.EMAIL_TOO_SHORT)
    .max(EMAIL_MAX_LENGTH, ValidationErrorMessage.EMAIL_TOO_LONG),
  password: z
    .string({ required_error: ValidationErrorMessage.PASSWORD_REQUIRED })
    .min(PASSWORD_MIN_LENGTH, ValidationErrorMessage.PASSWORD_TOO_SHORT)
    .max(PASSWORD_MAX_LENGTH, ValidationErrorMessage.PASSWORD_TOO_LONG),
});

export { signUpValidationSchema, signInValidationSchema };
