import { ReportModel } from './report-model.type.js';

type ReportResponseDTO = Omit<ReportModel, 'userId' | 'updatedAt'>;

export { type ReportResponseDTO };
