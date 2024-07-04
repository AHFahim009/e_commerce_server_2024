"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControllers = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const asyncHandler_1 = __importDefault(require("../../utils/asyncHandler"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const order_services_1 = require("./order.services");
const createOrder = (0, asyncHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_services_1.OrderServices.createOrder(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Order created successfully!",
        data: result,
    });
}));
const getAllOrder = (0, asyncHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query;
    const result = yield order_services_1.OrderServices.getAllOrder(req.query);
    const messageRes = email
        ? "Orders fetched successfully!"
        : "Orders fetched successfully for user email!";
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: messageRes,
        data: result,
    });
}));
exports.OrderControllers = {
    createOrder,
    getAllOrder,
};
