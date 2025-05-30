import { type ReportModel } from './report-model.type.js';

type ReportPatchBulkRequestDTO = Pick<
  ReportModel,
  'userId' | 'isMarkedAsChecked' | 'isNew'
>;

export { type ReportPatchBulkRequestDTO };
