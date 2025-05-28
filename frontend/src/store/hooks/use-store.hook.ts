import { create } from 'zustand';
import {
  createAuthSlice,
  type ScriptReportsSlice,
  type AuthSlice,
  createScriptReportsSlice,
} from '../slices/slices.js';
import { wrapSlice } from '../helpers/helpers.js';
import { errorNotifierMiddleware } from '../middlewares/error-notifier.middleware.js';

type StoreState = {
  auth: AuthSlice;
  scriptReports: ScriptReportsSlice;
};

const useStore = create<StoreState>((...args) => ({
  ...wrapSlice<StoreState, 'auth', AuthSlice>(
    'auth',
    errorNotifierMiddleware(createAuthSlice),
  )(...args),
  ...wrapSlice<StoreState, 'scriptReports', ScriptReportsSlice>(
    'scriptReports',
    errorNotifierMiddleware(createScriptReportsSlice),
  )(...args),
}));

export { useStore };
