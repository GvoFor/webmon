import { Request, Response } from 'express';
import { service } from './service.js';
import {
  MonitorScriptReportsError,
  MonitorScriptsError,
} from './errors/errors.js';
import { HTTPCode } from '~/enums/enums.js';

const getReports = async (req: Request, res: Response) => {
  const response = await service.getReportsByUserId(req.userId as number);
  res.json(response);
};

const createReport = async (req: Request, res: Response) => {
  const response = await service.createReport({
    ...req.body,
    userId: req.userId as number,
  });
  res.json(response);
};

const patchReport = async (req: Request, res: Response) => {
  const id = Number(req.params['id']);
  if (isNaN(id)) {
    throw new MonitorScriptReportsError(
      'Id was not passed',
      HTTPCode.BAD_REQUEST,
    );
  }

  const response = await service.patchReport({
    ...req.body,
    id,
  });
  res.json(response);
};

const patchReportBulk = async (req: Request, res: Response) => {
  const response = await service.patchReportBulk({
    ...req.body,
    userId: req.userId as number,
  });
  res.json(response);
};

const deleteReport = async (req: Request, res: Response) => {
  const id = Number(req.params['id']);
  if (isNaN(id)) {
    throw new MonitorScriptReportsError(
      'Id was not passed',
      HTTPCode.BAD_REQUEST,
    );
  }

  const response = await service.deleteReport(id);
  res.json(response);
};

const getScripts = async (req: Request, res: Response) => {
  const response = await service.getScriptsByUserId(req.userId as number);
  res.json(response);
};

const createScript = async (req: Request, res: Response) => {
  const response = await service.createScript({
    ...req.body,
    userId: req.userId as number,
  });
  res.json(response);
};

const deleteScript = async (req: Request, res: Response) => {
  const id = Number(req.params['id']);
  if (isNaN(id)) {
    throw new MonitorScriptsError('Id was not passed', HTTPCode.BAD_REQUEST);
  }

  const response = await service.deleteScript(id);
  res.json(response);
};

const controller = {
  getReports,
  createReport,
  patchReport,
  patchReportBulk,
  deleteReport,
  getScripts,
  createScript,
  deleteScript,
};

export { controller };
