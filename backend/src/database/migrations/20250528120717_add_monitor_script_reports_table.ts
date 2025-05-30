import type { Knex } from 'knex';

const TABLE_NAME = 'monitor_script_reports';

const Column = {
  ID: 'id',

  USER_ID: 'user_id',
  SCRIPT_NAME: 'script_name',
  SCRIPT_AVATAR_URL: 'script_avatar_url',
  PREVIEW_IMAGE_URL: 'preview_image_url',
  HREF: 'href',
  TITLE: 'title',
  DESCRIPTION: 'description',
  IS_MARKED_AS_CHECKED: 'is_marked_as_checked',
  IS_NEW: 'is_new',

  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
} as const;

const up = (knex: Knex): Promise<void> => {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments(Column.ID).primary();

    table.integer(Column.USER_ID).notNullable();
    table.string(Column.SCRIPT_NAME).notNullable();
    table.string(Column.SCRIPT_AVATAR_URL);
    table.string(Column.PREVIEW_IMAGE_URL);
    table.string(Column.HREF).notNullable();
    table.string(Column.TITLE).notNullable();
    table.string(Column.DESCRIPTION).notNullable();
    table.boolean(Column.IS_MARKED_AS_CHECKED).defaultTo(false);
    table.boolean(Column.IS_NEW).defaultTo(true);

    table.dateTime(Column.CREATED_AT).notNullable().defaultTo(knex.fn.now());
    table.dateTime(Column.UPDATED_AT).notNullable().defaultTo(knex.fn.now());
  });
};

const down = (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};

export { up, down };
