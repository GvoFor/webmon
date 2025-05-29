import { db } from '~/database/database.js';
import { DatabaseTableName } from '~/enums/database-table-name.enum.js';
import {
  type ScriptCreateRequestDTO,
  type ScriptModel,
} from '../types/types.js';

const TABLE_NAME = DatabaseTableName.MONITOR_SCRIPTS;

const getAllByUserId = async (userId: number): Promise<ScriptModel[]> => {
  const script = await db<ScriptModel>(TABLE_NAME)
    .where('userId', userId)
    .orderBy('createdAt', 'asc');

  return script;
};

const create = async ({
  userId,
  avatarUrl,
  name,
  description,
  monitorUrl,
  monitorSelector,
}: ScriptCreateRequestDTO): Promise<ScriptModel | undefined> => {
  const [script] = await db<ScriptModel>(TABLE_NAME)
    .insert({
      userId,
      avatarUrl,
      name,
      description,
      monitorUrl,
      monitorSelector,
    })
    .returning('*');

  return script;
};

const deleteById = async (id: number): Promise<ScriptModel | undefined> => {
  const [script] = await db<ScriptModel>(TABLE_NAME)
    .delete()
    .where('id', id)
    .returning('*');

  return script;
};

const repository = {
  getAllByUserId,
  create,
  deleteById,
};

export { repository };
