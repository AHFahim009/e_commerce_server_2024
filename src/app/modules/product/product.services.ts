import { AppError } from "../../error/AppError";
import { QueryBuilder } from "../../queryBuilder/QueryBuilder";
import { IProduct } from "./product.interface";
import ProductModel from "./product.model";

const createProduct = async (payload: IProduct) => {
  // is same product name exit
  const productName = await ProductModel.findOne({ name: payload.name })
  if (productName) throw new AppError(404, "sorry, This product name already has in store! Try another unique product name please!")
  const result = await ProductModel.create(payload);
  return result;
};
const getAllProduct = async (query: Record<string, unknown>) => {

  const products = new QueryBuilder(ProductModel.find(), query).searching()
  const result = await products.modelQuery

  return {
    result,
    isSearching: products.isSearching
  };
};
// Retrieve a Specific Product by ID
const getSpeaceficProduct = async (id: string) => {
  // product exit or not?
  const isProductExit = await ProductModel.findById(id);
  if (!isProductExit)
    throw new AppError(404, "sorry, This product doesn't exit!!");
  const result = await ProductModel.findById(id);
  return result;
};
// update a Specific Product by ID
const updateSpeaceficProduct = async (
  id: string,
  payload: Partial<IProduct>
) => {
  // product exit or not?
  const isProductExit = await ProductModel.findById(id);
  if (!isProductExit)
    throw new AppError(404, "sorry, This product doesn't exit!!");
  const result = await ProductModel.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

// delete a Specific Product by ID
const deleteSpeaceficProduct = async (id: string) => {
  // product exit or not?
  const isProductExit = await ProductModel.findById(id);
  if (!isProductExit)
    throw new AppError(404, "sorry, This product doesn't exit!!");
  await ProductModel.deleteOne({ _id: id });
  return null;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
  getSpeaceficProduct,
  updateSpeaceficProduct,
  deleteSpeaceficProduct,
};
