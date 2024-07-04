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
exports.ProductControllers = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const asyncHandler_1 = __importDefault(require("../../utils/asyncHandler"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const product_services_1 = require("./product.services");
const createProduct = (0, asyncHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_services_1.ProductServices.createProduct(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Product created successfully!",
        data: result,
    });
}));
const getAllProduct = (0, asyncHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.query;
    const { result, isSearching } = yield product_services_1.ProductServices.getAllProduct(req.query);
    const message = isSearching
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : "All products retrieved successfully!";
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: message,
        data: result,
    });
}));
const getSpeaceficProduct = (0, asyncHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_services_1.ProductServices.getSpeaceficProduct(productId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Products fetched successfully!",
        data: result,
    });
}));
const updateSpeaceficProduct = (0, asyncHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_services_1.ProductServices.updateSpeaceficProduct(productId, req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Product updated successfully!",
        data: result,
    });
}));
const deleteSpeaceficProduct = (0, asyncHandler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield product_services_1.ProductServices.deleteSpeaceficProduct(productId);
    (0, sendResponse_1.default)(res, {
        success: true,
        statusCode: 200,
        message: "Product deleted successfully!",
        data: result,
    });
}));
exports.ProductControllers = {
    createProduct,
    getAllProduct,
    getSpeaceficProduct,
    updateSpeaceficProduct,
    deleteSpeaceficProduct,
};
