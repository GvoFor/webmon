import { db } from '~/database/database.js';
import { DatabaseTableName } from '~/enums/database-table-name.enum.js';
import {
  type ReportPatchRequestDTO,
  type ReportCreateRequestDTO,
  type ReportModel,
  type ReportPatchBulkRequestDTO,
} from '../types/types.js';

const TABLE_NAME = DatabaseTableName.MONITOR_SCRIPT_REPORTS;

const getAllByUserId = async (userId: number): Promise<ReportModel[]> => {
  const report = await db<ReportModel>(TABLE_NAME)
    .where('userId', userId)
    .orderBy('createdAt', 'desc');

  return report;
};

const create = async ({
  userId,
  scriptName,
  scriptAvatarUrl,
  previewImageUrl,
  href,
  title,
  description,
}: ReportCreateRequestDTO): Promise<ReportModel | undefined> => {
  const [report] = await db<ReportModel>(TABLE_NAME)
    .insert({
      userId,
      scriptName,
      scriptAvatarUrl,
      previewImageUrl,
      href,
      title,
      description,
    })
    .returning('*');

  return report;
};

const patch = async ({
  id,
  isMarkedAsChecked,
  isNew,
}: ReportPatchRequestDTO): Promise<ReportModel | undefined> => {
  const [report] = await db<ReportModel>(TABLE_NAME)
    .update({
      isMarkedAsChecked,
      isNew,
    })
    .where('id', id)
    .returning('*');

  return report;
};

const patchAllWithUserId = async ({
  userId,
  isMarkedAsChecked,
  isNew,
}: ReportPatchBulkRequestDTO): Promise<ReportModel[]> => {
  const reports = await db<ReportModel>(TABLE_NAME)
    .update({
      isMarkedAsChecked,
      isNew,
    })
    .where('userId', userId)
    .returning('*');

  return reports;
};

const deleteById = async (id: number): Promise<ReportModel | undefined> => {
  const [report] = await db<ReportModel>(TABLE_NAME)
    .delete()
    .where('id', id)
    .returning('*');

  return report;
};

const repository = {
  getAllByUserId,
  create,
  patch,
  patchAllWithUserId,
  deleteById,
};

export { repository };
