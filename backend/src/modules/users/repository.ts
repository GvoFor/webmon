import { db } from '~/database/database.js';
import { type UserModel } from './types/types.js';
import { DatabaseTableName } from '~/enums/database-table-name.enum.js';

const TABLE_NAME = DatabaseTableName.USERS;

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
    console.log(error);
  }
};

const repository = {
  getByEmail,
  create,
};

export { repository };
