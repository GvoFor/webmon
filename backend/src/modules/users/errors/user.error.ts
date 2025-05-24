import { HTTPCode } from '~/enums/enums.js';
import { HTTPError } from '~/errors/errors.js';
import { ValueOf } from '~/types/types.js';

class UserError extends HTTPError {
  constructor(message: string, status: ValueOf<typeof HTTPCode>) {
    super(message, status);
  }
}

export { UserError };
