import { AppError } from "../../error/AppError";
import ProductModel from "../product/product.model";
import { IOrder } from "./order.interface";
import OrderModel from "./order.model";

const createOrder = async (payload: IOrder) => {
  const { productId, quantity } = payload;
  const isProductExit = await ProductModel.findOne({ _id: productId });
  if (!isProductExit)
    throw new AppError(404, "sorry! this product doesn't exit");

  // Step 1: Decrement the inventory quantity
  const updatedProduct = await ProductModel.findOneAndUpdate(
    {
      _id: productId,
      "inventory.quantity": { $gte: quantity },
    },
    {
      $inc: { "inventory.quantity": -quantity },
    },
    { new: true } // Return the updated document
  );

  if (!updatedProduct) {
    throw new Error("sorry, insufficient stock!!");
  }

  // Step 2: Update the inStock status based on the new quantity
  const inStock = updatedProduct.inventory.quantity > 0; // false or true

  await ProductModel.findOneAndUpdate(
    { _id: productId },
    { $set: { "inventory.inStock": inStock } }
  );

  // if all step pass successfully then create a new order!!
  const result = await OrderModel.create(payload);
  return result;
};

const getAllOrder = async (query: Record<string, unknown>) => {
  const email = query?.email;
  const filterObj: Record<string, unknown> = {};
  if (email) {
    filterObj["email"] = email;
  }

  const result = await OrderModel.find(filterObj);
  return result;
};

export const OrderServices = {
  createOrder,
  getAllOrder,
};
