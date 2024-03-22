import { RequestHandler } from 'express';
import { sendResponse } from '../../../ults/sendResponse';
import { productServices } from './products.services';

const getAllProducts: RequestHandler = async (req, res) => {
  const result = await productServices.getAllProductsFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All products retrieved successful',
    data: result,
  });
};
const getSingleProduct: RequestHandler = async (req, res) => {
  const { productId } = req.params;
  const result = await productServices.getSingleProductFromDB(productId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Single product retrieved successful',
    data: result,
  });
};

export const productsController = { getAllProducts, getSingleProduct };
