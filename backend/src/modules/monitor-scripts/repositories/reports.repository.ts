import { db } from '~/database/database.js';
import { DatabaseTableName } from '~/enums/database-table-name.enum.js';
import {
  type ReportCreateRequestDTO,
  type ReportModel,
} from '../types/types.js';

const TABLE_NAME = DatabaseTableName.MONITOR_SCRIPT_REPORTS;

const getAllByUserId = async (userId: number): Promise<ReportModel[]> => {
  const report = await db<ReportModel>(TABLE_NAME).where('userId', userId);

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

const repository = {
  getAllByUserId,
  create,
};

export { repository };
