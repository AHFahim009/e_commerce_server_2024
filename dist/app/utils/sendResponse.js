"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, responseData) => {
    const { success, data, message, statusCode } = responseData;
    res.status(statusCode).json({
        success,
        message,
        data,
    });
};
exports.default = sendResponse;
