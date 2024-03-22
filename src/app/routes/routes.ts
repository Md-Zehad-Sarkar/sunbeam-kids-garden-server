import express from 'express';
import { productRouter } from '../modules/products/products.routes';
import { categoryRouter } from '../modules/category/category.routes';

export const router = express.Router();

const moduleRouter = [
  { path: '/', route: productRouter },
  { path: '/', route: categoryRouter },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));
