"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncHandler = (asyncFn) => {
    return (req, res, next) => {
        Promise.resolve(asyncFn(req, res, next)).catch((error) => next(error));
    };
};
exports.default = asyncHandler;
