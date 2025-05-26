import knex from 'knex';
import toSnakeCase from 'to-snake-case';
import toCamelCase from 'camelcase-keys';
import { config } from '~/config/config.js';
import { DatabaseTableName } from '~/enums/enums.js';
import { DatabaseConnectionError } from './database-connection.error.js';
import { loggerService } from '~/modules/logger/logger.js';

const knexConfig: knex.Knex.Config = {
  client: config.DB_CLIENT,
  connection: {
    connectionString: config.DB_CONNECTION_STRING,
  },
  debug: false,
  migrations: {
    directory: 'src/database/migrations',
    tableName: DatabaseTableName.MIGRATIONS,
  },
  wrapIdentifier: (value, origImpl) =>
    origImpl(value === '*' ? '*' : toSnakeCase(value)),
  postProcessResponse: (result) => {
    if (Array.isArray(result)) {
      return result.map((row) => toCamelCase(row, { deep: true }));
    } else if (typeof result === 'object' && result !== null) {
      return toCamelCase(result, { deep: true });
    }
    return result;
  },
};

const db = knex(knexConfig);

try {
  await db.raw('SELECT 1');
  loggerService.info('Database connection established');
} catch (error) {
  throw new DatabaseConnectionError(
    `Could not establish database connection: ${error}`,
  );
}

export { knexConfig, db };
