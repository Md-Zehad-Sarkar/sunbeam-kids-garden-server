import { Product } from './products.model';

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

export const productServices = { getAllProductsFromDB };
