import { Request, Response } from 'express';
import { service } from './service.js';
import { getAuthTokenPayload } from '~/helpers/helpers.js';

const getUser = async (req: Request, res: Response) => {
  const tokenPayload = await getAuthTokenPayload(req);
  if ('errorMessage' in tokenPayload) {
    res.json(null);
    return;
  }

  const response = await service.getUser(tokenPayload.userId);
  res.json(response);
};

const signIn = async (req: Request, res: Response) => {
  const response = await service.signIn(req.body);
  res.json(response);
};

const signUp = async (req: Request, res: Response) => {
  const response = await service.signUp(req.body);
  res.json(response);
};

const controller = {
  getUser,
  signIn,
  signUp,
};

export { controller };
