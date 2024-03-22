import express from 'express';
import { productsController } from './products.controller';
const router = express.Router();

router.get('/products', productsController.getAllProducts);
router.get('/products/:productId', productsController.getSingleProduct);

export const productRouter = router;
