import { StateCreator } from 'zustand';
import { toastNotifier } from '~/modules/toast-notifier/toast-notifier.js';

export const errorNotifierMiddleware =
  <T extends object>(config: StateCreator<T>): StateCreator<T> =>
  (set, get, store) => {
    const slice = config(set, get, store);

    const wrappedSlice = Object.fromEntries(
      Object.entries(slice).map(([key, value]) => {
        if (typeof value === 'function') {
          const wrappedFn = async (...args: any[]) => {
            try {
              return await (value as Function).apply(slice, args);
            } catch (error) {
              if (error instanceof Error) {
                toastNotifier.showError(error.message);
              }
              // throw error; // ?? SHOULD I RETHROW ??
            }
          };
          return [key, wrappedFn];
        }

        return [key, value];
      }),
    );

    return wrappedSlice as T;
  };
