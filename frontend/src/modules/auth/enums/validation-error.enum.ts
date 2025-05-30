const ValidationErrorMessage = {
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_INVALID: 'Email is invalid',
  EMAIL_TOO_SHORT: `Email is too short`,
  EMAIL_TOO_LONG: `Email is too long`,
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_TOO_SHORT: `Password is too short`,
  PASSWORD_TOO_LONG: `Password is too long`,
  PASSWORDS_MISMATCH: `Passwords do not match`,
} as const;

export { ValidationErrorMessage };
