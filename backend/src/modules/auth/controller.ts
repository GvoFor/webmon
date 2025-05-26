import { Request, Response } from 'express';
import { service } from './service.js';
import { HTTPError } from '~/errors/errors.js';
import { HTTPCode } from '~/enums/enums.js';
import { getAuthTokenPayload } from '~/helpers/helpers.js';

const getUser = async (req: Request, res: Response) => {
  try {
    const tokenPayload = await getAuthTokenPayload(req);
    if ('errorMessage' in tokenPayload) {
      res.json(null);
      return;
    }
    const response = await service.getUser(tokenPayload.userId);
    res.json(response);
  } catch (error) {
    if (error instanceof HTTPError) {
      res
        .status(error.status)
        .json({ status: error.status, message: error.message });
    } else {
      res
        .status(HTTPCode.INTERNAL_SERVER_ERROR)
        .json({ message: (error as Error).message });
    }
  }
};

const signIn = async (req: Request, res: Response) => {
  try {
    const response = await service.signIn(req.body);
    res.json(response);
  } catch (error) {
    if (error instanceof HTTPError) {
      res
        .status(error.status)
        .json({ status: error.status, message: error.message });
    } else {
      res
        .status(HTTPCode.INTERNAL_SERVER_ERROR)
        .json({ message: (error as Error).message });
    }
  }
};

const signUp = async (req: Request, res: Response) => {
  try {
    const response = await service.signUp(req.body);
    res.json(response);
  } catch (error) {
    if (error instanceof HTTPError) {
      res
        .status(error.status)
        .json({ status: error.status, message: error.message });
    } else {
      res
        .status(HTTPCode.INTERNAL_SERVER_ERROR)
        .json({ message: (error as Error).message });
    }
  }
};

const controller = {
  getUser,
  signIn,
  signUp,
};

export { controller };
