import express from 'express';
import { categoryController } from './category.controller';
const router = express.Router();

router.get('/categories', categoryController.getAllCategory);

export const categoryRouter = router;
