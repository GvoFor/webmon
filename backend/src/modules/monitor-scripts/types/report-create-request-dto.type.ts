import { BaseModel } from '~/types/types.js';
import { ReportModel } from './report-model.type.js';

type ReportCreateRequestDTO = Omit<
  ReportModel,
  keyof BaseModel | 'isNew' | 'isMarkedAsChecked'
>;

export { type ReportCreateRequestDTO };
