import express from 'express';
import { productsController } from './products.controller';
const router = express.Router();

router.get('/products', productsController.getAllProducts);

export const productRouter = router;
