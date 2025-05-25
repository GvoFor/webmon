import { create } from 'zustand';
import { createAuthSlice, type AuthSlice } from '../slices/slices.js';
import { wrapSlice } from '../helpers/helpers.js';

type StoreState = {
  auth: AuthSlice;
};

const useStore = create<StoreState>((...args) => ({
  ...wrapSlice<StoreState, 'auth', AuthSlice>('auth', createAuthSlice)(...args),
}));

export { useStore };
