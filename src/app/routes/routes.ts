import express from 'express';
import { productRouter } from '../modules/products/products.routes';


export const router = express.Router();

const moduleRouter = [{ path: '/', route:productRouter}];

moduleRouter.forEach((route) => router.use(route.path, route.route));
