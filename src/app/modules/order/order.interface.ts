import mongoose from "mongoose";

export interface IOrder {
  email: string;
  productId: mongoose.Types.ObjectId; // Reference to Product _id
  price?: number;
  quantity: number;
}