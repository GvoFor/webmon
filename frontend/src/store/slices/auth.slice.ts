import { StateCreator } from 'zustand';
import {
  type SignUpRequestDTO,
  type SignInRequestDTO,
  type AuthResponseDTO,
  AuthAPIEndpoint,
  AuthSuccessMessage,
} from '~/modules/auth/auth.js';
import { http } from '~/modules/http/http.js';
import { storage, StorageKey } from '~/modules/local-storage/local-storage.js';
import { toastNotifier } from '~/modules/toast-notifier/toast-notifier.js';
import { type User } from '~/modules/users/users.js';

type AuthSlice = {
  user: User | null;
  isUserLoading: boolean;
  getUser: () => Promise<void>;
  signIn: (payload: SignInRequestDTO) => Promise<void>;
  signUp: (payload: SignUpRequestDTO) => Promise<void>;
  signOut: () => void;
};

const createSlice: StateCreator<AuthSlice> = (set) => ({
  user: null,
  isUserLoading: true,
  getUser: async () => {
    set({ isUserLoading: true });

    const user = await http.get<User>(AuthAPIEndpoint.GET_USER);

    set({ user, isUserLoading: false });
  },
  signIn: async (payload: SignInRequestDTO) => {
    const { token, user } = await http.post<AuthResponseDTO>(
      AuthAPIEndpoint.SIGN_IN,
      payload,
    );

    storage.store(StorageKey.AUTH_TOKEN, token);

    toastNotifier.showSuccess(AuthSuccessMessage.SIGN_IN);

    set({ user });
  },
  signUp: async (payload: SignUpRequestDTO) => {
    const { token, user } = await http.post<AuthResponseDTO>(
      AuthAPIEndpoint.SIGN_UP,
      payload,
    );

    storage.store(StorageKey.AUTH_TOKEN, token);

    toastNotifier.showSuccess(AuthSuccessMessage.SIGN_UP);

    set({ user });
  },
  signOut: () => {
    storage.remove(StorageKey.AUTH_TOKEN);

    toastNotifier.showSuccess(AuthSuccessMessage.SIGN_OUT);

    set({ user: null });
  },
});

export { type AuthSlice, createSlice as createAuthSlice };
