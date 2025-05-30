class DatabaseConnectionError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export { DatabaseConnectionError };
