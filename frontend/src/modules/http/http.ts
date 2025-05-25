import { config } from '~/config/config.js';
import { StorageKey, storage } from '~/modules/local-storage/local-storage.js';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type RequestOptions = {
  method?: HttpMethod;
  headers?: HeadersInit;
  body?: object | undefined;
};

function getToken(): string | null {
  return storage.get(StorageKey.AUTH_TOKEN);
}

async function request<T>(
  url: string,
  options: RequestOptions = {},
): Promise<T> {
  const token = getToken();

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const fullUrl = `${config.API_ORIGIN_URL}/${url}`;

  const response = await fetch(fullUrl, {
    ...options,
    method: options.method || 'GET',
    headers,
    body: options.body ? JSON.stringify(options.body) : null,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorBody}`);
  }

  return response.json();
}

const http = {
  get: <T>(url: string, options?: RequestOptions) =>
    request<T>(url, { ...options, method: 'GET' }),
  post: <T>(url: string, body?: object, options?: RequestOptions) =>
    request<T>(url, { ...options, method: 'POST', body }),
  put: <T>(url: string, body?: object, options?: RequestOptions) =>
    request<T>(url, { ...options, method: 'PUT', body }),
  delele: <T>(url: string, options?: RequestOptions) =>
    request<T>(url, { ...options, method: 'DELETE' }),
};

export { http };
