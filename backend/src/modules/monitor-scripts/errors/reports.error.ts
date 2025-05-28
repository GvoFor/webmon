import { HTTPCode } from '~/enums/enums.js';
import { HTTPError } from '~/errors/errors.js';
import { ValueOf } from '~/types/types.js';

class MonitorScriptReportsError extends HTTPError {
  constructor(
    message: string,
    status: ValueOf<typeof HTTPCode> = HTTPCode.INTERNAL_SERVER_ERROR,
  ) {
    super(message, status);
  }
}

export { MonitorScriptReportsError };
