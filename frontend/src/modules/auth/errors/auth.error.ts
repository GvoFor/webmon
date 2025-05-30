import { HTTPCode, HTTPError } from '~/modules/http/http.js';
import { ValueOf } from '~/types/types.js';

class AuthError extends HTTPError {
  constructor(message: string, status: ValueOf<typeof HTTPCode>) {
    super(message, status);
  }
}

export { AuthError };
