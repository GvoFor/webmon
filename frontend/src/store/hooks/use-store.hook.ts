import { create } from 'zustand';
import {
  createAuthSlice,
  type MonitorScriptsSlice,
  type AuthSlice,
  createMonitorScriptsSlice,
} from '../slices/slices.js';
import { wrapSlice } from '../helpers/helpers.js';
import { errorNotifierMiddleware } from '../middlewares/error-notifier.middleware.js';

type StoreState = {
  auth: AuthSlice;
  monitorScripts: MonitorScriptsSlice;
};

const useStore = create<StoreState>((...args) => ({
  ...wrapSlice<StoreState, 'auth', AuthSlice>(
    'auth',
    errorNotifierMiddleware(createAuthSlice),
  )(...args),
  ...wrapSlice<StoreState, 'monitorScripts', MonitorScriptsSlice>(
    'monitorScripts',
    errorNotifierMiddleware(createMonitorScriptsSlice),
  )(...args),
}));

export { useStore };
