import { Product } from './products.model';

const getAllProductsFromDB = async () => {
  try {
    const result = await Product.find();
    if (!result) {
      throw new Error('Could not find any result, try again');
    }
    return result;
  } catch (error) {
    return 'Could not find any result';
  }
};

const getSingleProductFromDB = async (id: string) => {
  try {
    const result = await Product.findOne({ _id: id });
    if (!result) {
      throw new Error('invalid id');
    }
    return result;
  } catch (error) {
    return 'Invalid id';
  }
};

export const productServices = { getAllProductsFromDB, getSingleProductFromDB };
