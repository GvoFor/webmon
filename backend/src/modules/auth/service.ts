import { usersService } from '~/modules/users/users.js';
import {
  AuthResponseDTO,
  SignInRequestDTO,
  SignUpRequestDTO,
} from './types/types.js';
import { AuthError } from './errors/errors.js';
import { HTTPCode } from '~/enums/http-code.enum.js';
import { ErrorMessage } from './enums/enums.js';
import { encryptionService } from '~/modules/modules.js';
import { tokenService } from '~/modules/token/token.js';

const signIn = async (dto: SignInRequestDTO): Promise<AuthResponseDTO> => {
  const { email, password } = dto;

  try {
    const user = await usersService.getByEmail(email);

    const isPasswordMatch = await encryptionService.compare(
      password,
      user.passwordHash,
    );

    if (!isPasswordMatch) {
      throw new AuthError(
        ErrorMessage.INVALID_CREDENTIALS,
        HTTPCode.UNAUTHORIZED,
      );
    }

    const token = await tokenService.create({ userId: user.id });

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    };
  } catch (error) {
    throw new AuthError(
      ErrorMessage.INVALID_CREDENTIALS,
      HTTPCode.UNAUTHORIZED,
    );
  }
};

const signUp = async (dto: SignUpRequestDTO): Promise<AuthResponseDTO> => {
  const { email, password, confirmPassword } = dto;

  try {
    await usersService.getByEmail(email);
    throw new AuthError(ErrorMessage.EMAIL_IN_USE, HTTPCode.UNAUTHORIZED);
  } catch (error) {
    if (error instanceof AuthError) {
      throw error;
    }
  }

  if (password !== confirmPassword) {
    throw new AuthError(ErrorMessage.PASSWORDS_MISMATCH, HTTPCode.UNAUTHORIZED);
  }

  const { hashedData: passwordHash, salt: passwordSalt } =
    await encryptionService.hash(password);

  const user = await usersService.create({ email, passwordHash, passwordSalt });

  const token = await tokenService.create({ userId: user.id });

  return {
    token,
    user: {
      id: user.id,
      email: user.email,
    },
  };
};

const service = {
  signIn,
  signUp,
};

export { service };
