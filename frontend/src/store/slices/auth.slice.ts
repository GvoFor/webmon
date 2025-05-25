import { StateCreator } from 'zustand';
import {
  type SignUpRequestDTO,
  type SignInRequestDTO,
  type AuthResponseDTO,
  AuthAPIEndpoint,
} from '~/modules/auth/auth.js';
import { http } from '~/modules/http/http.js';
import { storage, StorageKey } from '~/modules/local-storage/local-storage.js';
import { type User } from '~/modules/users/users.js';

type AuthSlice = {
  user: User | null;
  getUser: () => Promise<void>;
  signIn: (payload: SignInRequestDTO) => Promise<void>;
  signUp: (payload: SignUpRequestDTO) => Promise<void>;
  signOut: () => void;
};

const createSlice: StateCreator<AuthSlice> = (set) => ({
  user: null,
  getUser: async () => {
    try {
      const user = await http.get<User>(AuthAPIEndpoint.GET_USER);

      set({ user });
    } catch (error) {
      console.error(error);
    }
  },
  signIn: async (payload: SignInRequestDTO) => {
    try {
      const { token, user } = await http.post<AuthResponseDTO>(
        AuthAPIEndpoint.SIGN_IN,
        payload,
      );

      storage.store(StorageKey.AUTH_TOKEN, token);

      set({ user });
    } catch (error) {
      console.error(error);
    }
  },
  signUp: async (payload: SignUpRequestDTO) => {
    try {
      const { token, user } = await http.post<AuthResponseDTO>(
        AuthAPIEndpoint.SIGN_UP,
        payload,
      );

      storage.store(StorageKey.AUTH_TOKEN, token);

      set({ user });
    } catch (error) {
      console.error(error);
    }
  },
  signOut: () => {
    storage.remove(StorageKey.AUTH_TOKEN);

    set({ user: null });
  },
});

export { type AuthSlice, createSlice as createAuthSlice };
