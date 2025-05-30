import { create } from 'zustand';
import {
  createAuthSlice,
  createScriptReportsSlice,
  createScriptsSlice,
  type ScriptReportsSlice,
  type AuthSlice,
  type ScriptsSlice,
} from '../slices/slices.js';
import { wrapSlice } from '../helpers/helpers.js';
import { errorNotifierMiddleware } from '../middlewares/error-notifier.middleware.js';

type StoreState = {
  auth: AuthSlice;
  scriptReports: ScriptReportsSlice;
  scripts: ScriptsSlice;
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
  ...wrapSlice<StoreState, 'scripts', ScriptsSlice>(
    'scripts',
    errorNotifierMiddleware(createScriptsSlice),
  )(...args),
}));

export { useStore };
