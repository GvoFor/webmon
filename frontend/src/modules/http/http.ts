import { config } from '~/config/config.js';
import { StorageKey, storage } from '~/modules/local-storage/local-storage.js';
import { ValueOf } from '~/types/types.js';

const HTTPCode = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

class HTTPError extends Error {
  public status: ValueOf<typeof HTTPCode>;
  constructor(message: string, status: ValueOf<typeof HTTPCode>) {
    super(message);
    this.status = status;
  }
}

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
    try {
      const { status, message } = await response.json();
      throw new HTTPError(message, status);
    } catch (error) {
      if (error instanceof HTTPError) {
        throw error;
      }
      throw new HTTPError(
        'Internal Server Error',
        HTTPCode.INTERNAL_SERVER_ERROR,
      );
    }
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
