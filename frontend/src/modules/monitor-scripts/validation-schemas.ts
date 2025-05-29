import { z } from 'zod';
import { ValidationErrorMessage } from './enums/enums.js';
import {
  SCRIPT_DESCRIPTION_MAX_LENGTH,
  SCRIPT_NAME_MAX_LENGTH,
  SCRIPT_NAME_MIN_LENGTH,
} from './consts/consts.js';

const createScriptValidationSchema = z.object({
  avatarUrl: z.string().optional(),
  name: z
    .string({
      required_error: ValidationErrorMessage.SCRIPT_NAME_REQUIRED,
    })
    .min(SCRIPT_NAME_MIN_LENGTH, ValidationErrorMessage.SCRIPT_NAME_TOO_SHORT)
    .max(SCRIPT_NAME_MAX_LENGTH, ValidationErrorMessage.SCRIPT_NAME_TOO_LONG),
  description: z
    .string({
      required_error: ValidationErrorMessage.SCRIPT_DESCRIPTION_REQUIRED,
    })
    .max(
      SCRIPT_DESCRIPTION_MAX_LENGTH,
      ValidationErrorMessage.SCRIPT_DESCRIPTION_TOO_LONG,
    ),
  monitorUrl: z
    .string({
      required_error: ValidationErrorMessage.SCRIPT_MONITOR_URL_REQUIRED,
    })
    .nonempty({ message: ValidationErrorMessage.SCRIPT_MONITOR_URL_REQUIRED }),
  monitorSelector: z
    .string({
      required_error: ValidationErrorMessage.SCRIPT_MONITOR_SELECTOR_REQUIRED,
    })
    .nonempty({
      message: ValidationErrorMessage.SCRIPT_MONITOR_SELECTOR_REQUIRED,
    }),
});

export { createScriptValidationSchema };
