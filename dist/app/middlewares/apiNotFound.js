"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
Object.defineProperty(exports, "__esModule", { value: true });
const apiNotFound = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: 'API Not Found !!',
        error: '',
    });
};
exports.default = apiNotFound;
