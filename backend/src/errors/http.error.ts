import { HTTPCode } from '~/enums/enums.js';
import { ValueOf } from '~/types/types.js';

class HTTPError extends Error {
  public status: ValueOf<typeof HTTPCode>;
  constructor(message: string, status: ValueOf<typeof HTTPCode>) {
    super(message);
    this.status = status;
  }
}

export { HTTPError };
