import type { Knex } from 'knex';

const TABLE_NAME = 'monitor_scripts';

const Column = {
  ID: 'id',

  USER_ID: 'user_id',
  AVATAR_URL: 'avatar_url',
  NAME: 'name',
  DESCRIPTION: 'description',
  MONITOR_URL: 'monitor_url',
  MONITOR_SELECTOR: 'monitor_selector',
  IS_ACTIVE: 'is_active',

  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
} as const;

const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 20;
const DESCRIPTION_MAX_LENGTH = 100;

const up = (knex: Knex): Promise<void> => {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments(Column.ID).primary();

    table.integer(Column.USER_ID).notNullable();
    table.string(Column.AVATAR_URL);
    table
      .string(Column.NAME, NAME_MAX_LENGTH)
      .checkLength('>=', NAME_MIN_LENGTH)
      .notNullable();
    table.string(Column.DESCRIPTION, DESCRIPTION_MAX_LENGTH).notNullable();
    table.string(Column.MONITOR_URL).notNullable();
    table.string(Column.MONITOR_SELECTOR).notNullable();
    table.boolean(Column.IS_ACTIVE).defaultTo(false);

    table.dateTime(Column.CREATED_AT).notNullable().defaultTo(knex.fn.now());
    table.dateTime(Column.UPDATED_AT).notNullable().defaultTo(knex.fn.now());
  });
};

const down = (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};

export { up, down };
