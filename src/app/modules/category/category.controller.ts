import { RequestHandler } from 'express';
import { catchAsync } from '../../../ults/catchAsync';
import { categoryServices } from './category.services';
import { sendResponse } from '../../../ults/sendResponse';
import httpStatus from 'http-status';

const getAllCategory: RequestHandler = catchAsync(async (req, res) => {
  const result = await categoryServices.getAllCategoryFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All categories retrieved successful',
    data: result,
  });
});

export const categoryController = { getAllCategory };
