/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from "express";
import { AppError } from "../error/AppError";

export const globalErrorHandler: ErrorRequestHandler = (
  err: AppError,
  req,
  res,
  next
) => {
  // default error ..
  const statusCode = err.statusCode || 500;
  const success = false;
  const message = err.message || "Something went wrong!";

  return res.status(statusCode).json({
    success,
    message,
    error: err
  });
};
