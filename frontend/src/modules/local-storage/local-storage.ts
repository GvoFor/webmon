import { ValueOf } from '~/types/types.js';

const StorageKey = {
  AUTH_TOKEN: 'auth-token',
} as const;

const store = (key: ValueOf<typeof StorageKey>, value: string) => {
  localStorage.setItem(key, value);
};

const get = (key: ValueOf<typeof StorageKey>) => {
  return localStorage.getItem(key);
};

const remove = (key: ValueOf<typeof StorageKey>) => {
  return localStorage.removeItem(key);
};

const storage = {
  store,
  get,
  remove,
};

export { StorageKey, storage };
