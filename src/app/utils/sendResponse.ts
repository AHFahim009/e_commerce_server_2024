import { Response } from "express";

interface TResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

const sendResponse = <T>(res: Response, responseData: TResponse<T>) => {
  const { success, data, message, statusCode } = responseData;

  res.status(statusCode).json({
    success,
    message,
    data,
  });
};

export default sendResponse;
