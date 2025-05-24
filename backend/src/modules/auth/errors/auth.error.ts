import { HTTPCode } from '~/enums/enums.js';
import { HTTPError } from '~/errors/errors.js';
import { ValueOf } from '~/types/types.js';

class AuthError extends HTTPError {
  constructor(message: string, status: ValueOf<typeof HTTPCode>) {
    super(message, status);
  }
}

export { AuthError };
