/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.services";

const createProduct = asyncHandler(async (req, res, next) => {
  const result = await ProductServices.createProduct(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product created successfully!",
    data: result,
  });
});

const getAllProduct = asyncHandler(async (req, res, next) => {
  const { searchTerm } = req.query;
  const { result, isSearching } = await ProductServices.getAllProduct(
    req.query
  );
  const message = isSearching
    ? `Products matching search term '${searchTerm}' fetched successfully!`
    : "All products retrieved successfully!";

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: message,
    data: result,
  });
});
const getSpeaceficProduct = asyncHandler(async (req, res, next) => {
  const { productId } = req.params;
  const result = await ProductServices.getSpeaceficProduct(productId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Products fetched successfully!",
    data: result,
  });
});

const updateSpeaceficProduct = asyncHandler(async (req, res, next) => {
  const { productId } = req.params;
  const result = await ProductServices.updateSpeaceficProduct(
    productId,
    req.body
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product updated successfully!",
    data: result,
  });
});

const deleteSpeaceficProduct = asyncHandler(async (req, res, next) => {
  const { productId } = req.params;
  const result = await ProductServices.deleteSpeaceficProduct(productId);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Product deleted successfully!",
    data: result,
  });
});

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSpeaceficProduct,
  updateSpeaceficProduct,
  deleteSpeaceficProduct,
};
