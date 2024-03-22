import { Schema, model } from 'mongoose';
import { IProducts } from './products.interface';

const ProductSchema = new Schema<IProducts>({
  title: { type: String },
  price: { type: Number },
  brand: { type: String },
  category: { type: String },
  image: { type: String },
  rating: { type: Number },
  description: { type: String },
  createdAt: { type: String },
});

export const Product = model<IProducts>('Product', ProductSchema);
