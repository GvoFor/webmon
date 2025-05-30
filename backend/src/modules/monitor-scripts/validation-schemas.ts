import { z } from 'zod';
import { ValidationErrorMessage } from './enums/enums.js';
import {
  SCRIPT_DESCRIPTION_MAX_LENGTH,
  SCRIPT_NAME_MAX_LENGTH,
  SCRIPT_NAME_MIN_LENGTH,
} from './consts/consts.js';

const createReportValidationSchema = z.object({
  scriptName: z.string({
    required_error: ValidationErrorMessage.REPORT_SCRIPT_NAME_REQUIRED,
  }),
  scriptAvatarUrl: z.string().optional(),
  previewImageUrl: z.string().optional(),
  href: z.string({
    required_error: ValidationErrorMessage.REPORT_HREF_REQUIRED,
  }),
  title: z.string({
    required_error: ValidationErrorMessage.REPORT_TITLE_REQUIRED,
  }),
  description: z.string({
    required_error: ValidationErrorMessage.REPORT_DESCRIPTION_REQUIRED,
  }),
});

const patchReportValidationSchema = z.object({
  isMarkedAsChecked: z.boolean().optional(),
  isNew: z.boolean().optional(),
});

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

const patchScriptValidationSchema = z.object({
  isActive: z.boolean().optional(),
});

export {
  createReportValidationSchema,
  patchReportValidationSchema,
  createScriptValidationSchema,
  patchScriptValidationSchema,
};
