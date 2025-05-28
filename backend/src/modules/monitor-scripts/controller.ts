import { Request, Response } from 'express';
import { service } from './service.js';

const getReports = async (req: Request, res: Response) => {
  const response = await service.getReportsByUserId(req.userId as number);
  res.json(response);
};

const createReport = async (req: Request, res: Response) => {
  const response = await service.crateReport({
    ...req.body,
    userId: req.userId as number,
  });
  res.json(response);
};

const controller = {
  getReports,
  createReport,
};

export { controller };
