import { MonitorScriptReportsError } from './errors/errors.js';
import { reportsRepository } from './repositories/repositories.js';
import {
  type ReportCreateRequestDTO,
  type ReportResponseDTO,
} from './types/types.js';

const getReportsByUserId = async (
  userId: number,
): Promise<ReportResponseDTO[]> => {
  const reports = await reportsRepository.getAllByUserId(userId);

  return reports;
};

const crateReport = async (
  requestDto: ReportCreateRequestDTO,
): Promise<ReportResponseDTO> => {
  const report = await reportsRepository.create(requestDto);

  if (!report) {
    throw new MonitorScriptReportsError('Failed to create report');
  }

  return {
    id: report.id,
    scriptName: report.scriptName,
    scriptAvatarUrl: report.scriptAvatarUrl,
    previewImageUrl: report.previewImageUrl,
    href: report.href,
    title: report.title,
    description: report.description,
    isMarkedAsChecked: report.isMarkedAsChecked,
    isNew: report.isNew,
    createdAt: report.createdAt,
  };
};

const service = {
  getReportsByUserId,
  crateReport,
};

export { service };
