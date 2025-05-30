import { db } from '~/database/database.js';
import { DatabaseTableName } from '~/enums/database-table-name.enum.js';
import {
  type ScriptExecutorRequestDTO,
  type ScriptExecutorModel,
} from './types/types.js';

const TABLE_NAME = DatabaseTableName.MONITOR_SCRIPT_EXECUTORS;

const getByScriptId = async (
  scriptId: number,
): Promise<ScriptExecutorModel | undefined> => {
  const executor = await db<ScriptExecutorModel>(TABLE_NAME)
    .where('scriptId', scriptId)
    .first();

  return executor;
};

const create = async ({
  scriptId,
  firstHref,
  lastHref,
}: ScriptExecutorRequestDTO): Promise<ScriptExecutorModel | undefined> => {
  const [executor] = await db<ScriptExecutorModel>(TABLE_NAME)
    .insert({
      scriptId,
      firstHref,
      lastHref,
    })
    .returning('*');

  return executor;
};

const patch = async ({
  scriptId,
  firstHref,
  lastHref,
}: ScriptExecutorRequestDTO): Promise<ScriptExecutorModel | undefined> => {
  const [executor] = await db<ScriptExecutorModel>(TABLE_NAME)
    .update({ firstHref, lastHref })
    .where('scriptId', scriptId)
    .returning('*');

  return executor;
};

const repository = {
  getByScriptId,
  create,
  patch,
};

export { repository };
