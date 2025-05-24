import { HTTPCode } from '~/enums/http-code.enum.js';
import { UserError } from './errors/user.error.js';
import { repository } from './repository.js';
import { UserModel } from './types/types.js';
import { ErrorMessage } from './enums/enums.js';

const getByEmail = async (email: UserModel['email']): Promise<UserModel> => {
  const user = await repository.getByEmail(email);

  if (!user) {
    throw new UserError(ErrorMessage.NOT_FOUND, HTTPCode.NOT_FOUND);
  }

  return user;
};

const create = async ({
  email,
  passwordHash,
  passwordSalt,
}: Pick<
  UserModel,
  'email' | 'passwordHash' | 'passwordSalt'
>): Promise<UserModel> => {
  const user = await repository.create({ email, passwordHash, passwordSalt });

  if (!user) {
    throw new UserError(ErrorMessage.ALREADY_EXIST, HTTPCode.BAD_REQUEST);
  }

  return user;
};

const service = {
  getByEmail,
  create,
};

export { service };
