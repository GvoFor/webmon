import { type User } from '~/modules/users/users.js';

type AuthResponseDTO = {
  token: string;
  user: User;
};

export { type AuthResponseDTO };
