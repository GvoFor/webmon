const ValidationErrorMessage = {
  SCRIPT_NAME_REQUIRED: 'Name is required',
  SCRIPT_NAME_TOO_SHORT: `Name is too short`,
  SCRIPT_NAME_TOO_LONG: `Name is too long`,
  SCRIPT_DESCRIPTION_REQUIRED: 'Description is required',
  SCRIPT_DESCRIPTION_TOO_LONG: `Description is too long`,
  SCRIPT_MONITOR_URL_REQUIRED: 'URL is required',
  SCRIPT_MONITOR_SELECTOR_REQUIRED: 'Selector is required',
} as const;

export { ValidationErrorMessage };
