"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (err, req, res, next) => {
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
exports.globalErrorHandler = globalErrorHandler;
