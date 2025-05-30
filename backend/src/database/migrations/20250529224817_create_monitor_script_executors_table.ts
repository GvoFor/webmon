import type { Knex } from 'knex';

const TABLE_NAME = 'monitor_script_executors';

const Column = {
  ID: 'id',

  SCRIPT_ID: 'script_id',
  FIRST_HREF: 'first_href',
  LAST_HREF: 'last_href',

  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
} as const;

const up = (knex: Knex): Promise<void> => {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments(Column.ID).primary();

    table.integer(Column.SCRIPT_ID).notNullable().unique();
    table.string(Column.FIRST_HREF).notNullable();
    table.string(Column.LAST_HREF).notNullable();

    table.dateTime(Column.CREATED_AT).notNullable().defaultTo(knex.fn.now());
    table.dateTime(Column.UPDATED_AT).notNullable().defaultTo(knex.fn.now());
  });
};

const down = (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};

export { up, down };
