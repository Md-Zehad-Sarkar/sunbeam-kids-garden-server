import { RequestHandler } from 'express';
import httpStatus from 'http-status';

export const apiNotFound: RequestHandler = (req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Api Not Found',
    data: null,
    error: 'Api error',
  });
  next();
};
