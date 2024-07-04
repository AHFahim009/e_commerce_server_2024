/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import asyncHandler from "../../utils/asyncHandler";
import sendResponse from "../../utils/sendResponse";
import { OrderServices } from "./order.services";

const createOrder = asyncHandler(async (req, res, next) => {
  const result = await OrderServices.createOrder(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Order created successfully!",
    data: result,
  });
});

const getAllOrder = asyncHandler(async (req, res, next) => {
  const email = req.query;
  const result = await OrderServices.getAllOrder(req.query);

  const messageRes = email
    ? "Orders fetched successfully!"
    : "Orders fetched successfully for user email!";

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: messageRes,
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
  getAllOrder,
};
