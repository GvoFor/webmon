import { z } from 'zod';
import { ValidationErrorMessage } from './enums/enums.js';

const createReportValidationSchema = z.object({
  scriptName: z.string({
    required_error: ValidationErrorMessage.SCRIPT_NAME_REQUIRED,
  }),
  scriptAvatarUrl: z.string().optional(),
  previewImageUrl: z.string().optional(),
  href: z.string({ required_error: ValidationErrorMessage.HREF_REQUIRED }),
  title: z.string({ required_error: ValidationErrorMessage.TITLE_REQUIRED }),
  description: z.string({
    required_error: ValidationErrorMessage.DESCRIPTION_REQUIRED,
  }),
});

export { createReportValidationSchema };
