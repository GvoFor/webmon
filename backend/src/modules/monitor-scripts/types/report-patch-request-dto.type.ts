import { type ReportModel } from './report-model.type.js';

type ReportPatchRequestDTO = Pick<
  ReportModel,
  'id' | 'isMarkedAsChecked' | 'isNew'
>;

export { type ReportPatchRequestDTO };
