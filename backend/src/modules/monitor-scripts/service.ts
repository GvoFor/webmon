import {
  MonitorScriptReportsError,
  MonitorScriptsError,
} from './errors/errors.js';
import {
  reportModelToResponseDto,
  scriptModelToResponseDto,
} from './helpers/helpers.js';
import {
  reportsRepository,
  scriptsRepository,
} from './repositories/repositories.js';
import {
  type ReportPatchRequestDTO,
  type ReportCreateRequestDTO,
  type ReportResponseDTO,
  type ReportPatchBulkRequestDTO,
  type ScriptResponseDTO,
  type ScriptCreateRequestDTO,
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

const getScriptsByUserId = async (
  userId: number,
): Promise<ScriptResponseDTO[]> => {
  const scripts = await scriptsRepository.getAllByUserId(userId);

  return scripts;
};

const createScript = async (
  requestDto: ScriptCreateRequestDTO,
): Promise<ScriptResponseDTO> => {
  const script = await scriptsRepository.create(requestDto);

  if (!script) {
    throw new MonitorScriptsError('Failed to create script');
  }

  return scriptModelToResponseDto(script);
};

const deleteScript = async (id: number): Promise<ScriptResponseDTO> => {
  const script = await scriptsRepository.deleteById(id);

  if (!script) {
    throw new MonitorScriptsError('Failed to delete script');
  }

  return scriptModelToResponseDto(script);
};

const service = {
  getReportsByUserId,
  createReport,
  patchReport,
  patchReportBulk,
  deleteReport,
  getScriptsByUserId,
  createScript,
  deleteScript,
};

export { service };
