import type { Knex } from 'knex';

const TABLE_NAME = 'users';

const Column = {
  ID: 'id',
  EMAIL: 'email',
  PASSWORD_HASH: 'password_hash',
  PASSWORD_SALT: 'password_salt',
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
} as const;

const EMAIL_MAX_LENGTH = 50;

const up = (knex: Knex): Promise<void> => {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments(Column.ID).primary();
    table.string(Column.EMAIL, EMAIL_MAX_LENGTH).unique().notNullable();
    table.text(Column.PASSWORD_HASH).notNullable();
    table.text(Column.PASSWORD_SALT).notNullable();
    table.dateTime(Column.CREATED_AT).notNullable().defaultTo(knex.fn.now());
    table.dateTime(Column.UPDATED_AT).notNullable().defaultTo(knex.fn.now());
  });
};

const down = (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};

export { up, down };
