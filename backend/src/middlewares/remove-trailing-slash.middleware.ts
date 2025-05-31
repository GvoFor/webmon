import { NextFunction, Request, Response } from 'express';
import { HTTPCode } from '~/enums/enums.js';

const removeTrailingSlash = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (req.path !== '/' && req.path.endsWith('/')) {
    const query = req.url.slice(req.path.length);
    res.redirect(HTTPCode.REDIRECT_PERMANENTLY, req.path.slice(0, -1) + query);
  } else {
    next();
  }
};

export { removeTrailingSlash };
