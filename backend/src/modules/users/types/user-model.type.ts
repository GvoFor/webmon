import { type BaseModel } from '~/types/types.js';

type UserModel = BaseModel & {
  email: string;
  passwordHash: string;
  passwordSalt: string;
};

export { type UserModel };
