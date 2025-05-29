import {
  SCRIPT_DESCRIPTION_MAX_LENGTH,
  SCRIPT_NAME_MAX_LENGTH,
  SCRIPT_NAME_MIN_LENGTH,
} from '../consts/consts.js';

const ValidationErrorMessage = {
  REPORT_ID_REQUIRED: 'id is required',
  REPORT_SCRIPT_NAME_REQUIRED: 'scriptName is required',
  REPORT_HREF_REQUIRED: 'href is required',
  REPORT_TITLE_REQUIRED: 'title is required',
  REPORT_DESCRIPTION_REQUIRED: 'description is required',
  SCRIPT_ID_REQUIRED: 'id is required',
  SCRIPT_NAME_REQUIRED: 'name is required',
  SCRIPT_NAME_TOO_SHORT: `name is too short. It must contain at least ${SCRIPT_NAME_MIN_LENGTH} characters`,
  SCRIPT_NAME_TOO_LONG: `name is too long. It must contain at most ${SCRIPT_NAME_MAX_LENGTH} characters`,
  SCRIPT_DESCRIPTION_REQUIRED: 'description is required',
  SCRIPT_DESCRIPTION_TOO_LONG: `description is too long. It must contain at most ${SCRIPT_DESCRIPTION_MAX_LENGTH} characters`,
  SCRIPT_MONITOR_URL_REQUIRED: 'monitorUrl is required',
  SCRIPT_MONITOR_SELECTOR_REQUIRED: 'monitorSelector is required',
} as const;

export { ValidationErrorMessage };
