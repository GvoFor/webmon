import {
  compare as libraryCompare,
  hash as libraryHash,
  genSalt,
} from 'bcrypt';
import { config } from '~/config/config.js';

const hash = async (data: string) => {
  const salt = await genSalt(config.ENC_SALT_ROUNDS);
  const hashedData = await libraryHash(data, salt);

  return { hashedData, salt };
};

const compare = async (data: string, hashedData: string) => {
  return await libraryCompare(data, hashedData);
};

const encryptionService = {
  hash,
  compare,
};

export { encryptionService };
