import {
  EMAIL_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from '../consts/consts.js';

const ValidationErrorMessage = {
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Email is invalid',
  EMAIL_TOO_SHORT: `Email is too short. It must contain at least ${EMAIL_MIN_LENGTH} characters`,
  EMAIL_TOO_LONG: `Email is too long. It must contain at most ${EMAIL_MAX_LENGTH} characters`,
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_TOO_SHORT: `Password is too short. It must contain at least ${PASSWORD_MIN_LENGTH} characters`,
  PASSWORD_TOO_LONG: `Password is too long. It must contain at most ${PASSWORD_MAX_LENGTH} characters`,
} as const;

export { ValidationErrorMessage };
