import { MonitorScriptReportsError } from './errors/errors.js';
import { reportModelToResponseDto } from './helpers/helpers.js';
import { reportsRepository } from './repositories/repositories.js';
import {
  type ReportPatchRequestDTO,
  type ReportCreateRequestDTO,
  type ReportResponseDTO,
  ReportPatchBulkRequestDTO,
} from './types/types.js';

const getReportsByUserId = async (
  userId: number,
): Promise<ReportResponseDTO[]> => {
  const reports = await reportsRepository.getAllByUserId(userId);

  return reports;
};

const createReport = async (
  requestDto: ReportCreateRequestDTO,
): Promise<ReportResponseDTO> => {
  const report = await reportsRepository.create(requestDto);

  if (!report) {
    throw new MonitorScriptReportsError('Failed to create report');
  }

  return reportModelToResponseDto(report);
};

const patchReport = async (
  requestDto: ReportPatchRequestDTO,
): Promise<ReportResponseDTO> => {
  const report = await reportsRepository.patch(requestDto);

  if (!report) {
    throw new MonitorScriptReportsError('Failed to patch report');
  }

  return reportModelToResponseDto(report);
};

const patchReportBulk = async (
  requestDto: ReportPatchBulkRequestDTO,
): Promise<ReportResponseDTO[]> => {
  const reports = await reportsRepository.patchAllWithUserId(requestDto);

  return reports.map(reportModelToResponseDto);
};

const deleteReport = async (id: number): Promise<ReportResponseDTO> => {
  const report = await reportsRepository.deleteById(id);

  if (!report) {
    throw new MonitorScriptReportsError('Failed to delete report');
  }

  return reportModelToResponseDto(report);
};

const service = {
  getReportsByUserId,
  createReport,
  patchReport,
  patchReportBulk,
  deleteReport,
};

export { service };
