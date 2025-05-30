import { db } from '~/database/database.js';
import { DatabaseTableName } from '~/enums/database-table-name.enum.js';
import {
  type ScriptPatchRequestDTO,
  type ScriptCreateRequestDTO,
  type ScriptModel,
} from '../types/types.js';

const TABLE_NAME = DatabaseTableName.MONITOR_SCRIPTS;

const getAll = async (): Promise<ScriptModel[]> => {
  const scripts = await db<ScriptModel>(TABLE_NAME);

  return scripts;
};

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

const patch = async ({
  id,
  isActive,
}: ScriptPatchRequestDTO): Promise<ScriptModel | undefined> => {
  const [report] = await db<ScriptModel>(TABLE_NAME)
    .update({ isActive })
    .where('id', id)
    .returning('*');

  return report;
};

const deleteById = async (id: number): Promise<ScriptModel | undefined> => {
  const [script] = await db<ScriptModel>(TABLE_NAME)
    .delete()
    .where('id', id)
    .returning('*');

  return script;
};

const repository = {
  getAll,
  getAllByUserId,
  create,
  patch,
  deleteById,
};

export { repository };
