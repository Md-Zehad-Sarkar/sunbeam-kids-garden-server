import { Schema, model } from 'mongoose';
import { ICategory } from './category.interface';

const categorySchema = new Schema<ICategory>({
  category: { type: String },
  brand: { type: String },
  categoryImage: { type: String },
  createdAt: { type: String },
});

export const Category = model<ICategory>('category', categorySchema);
