import { type User } from '~/modules/users/types/types.js';

type AuthResponseDTO = {
  token: string;
  user: User;
};

export { type AuthResponseDTO };
