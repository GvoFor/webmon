import { db } from '~/database/database.js';
import { type UserModel } from './types/types.js';
import { DatabaseTableName } from '~/enums/database-table-name.enum.js';
import { loggerService } from '../logger/logger.js';

const TABLE_NAME = DatabaseTableName.USERS;

const getById = async (id: UserModel['id']): Promise<UserModel | undefined> => {
  const user = await db<UserModel>(TABLE_NAME).where('id', id).first();

  return user;
};

const getByEmail = async (
  email: UserModel['email'],
): Promise<UserModel | undefined> => {
  const user = await db<UserModel>(TABLE_NAME).where('email', email).first();

  return user;
};

const create = async ({
  email,
  passwordHash,
  passwordSalt,
}: Pick<UserModel, 'email' | 'passwordHash' | 'passwordSalt'>): Promise<
  UserModel | undefined
> => {
  try {
    const [user] = await db<UserModel>(TABLE_NAME)
      .insert({
        email,
        passwordHash,
        passwordSalt,
      })
      .returning('*');

    return user;
  } catch (error) {
    loggerService.error(error as string);
  }
};

const repository = {
  getById,
  getByEmail,
  create,
};

export { repository };
