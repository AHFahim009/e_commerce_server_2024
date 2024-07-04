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
exports.ProductServices = void 0;
const AppError_1 = require("../../error/AppError");
const QueryBuilder_1 = require("../../queryBuilder/QueryBuilder");
const product_model_1 = __importDefault(require("./product.model"));
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // is same product name exit
    const productName = yield product_model_1.default.findOne({ name: payload.name });
    if (productName)
        throw new AppError_1.AppError(404, "sorry, This product name already has in store! Try another unique product name please!");
    const result = yield product_model_1.default.create(payload);
    return result;
});
const getAllProduct = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const products = new QueryBuilder_1.QueryBuilder(product_model_1.default.find(), query).searching();
    const result = yield products.modelQuery;
    return {
        result,
        isSearching: products.isSearching
    };
});
// Retrieve a Specific Product by ID
const getSpeaceficProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // product exit or not?
    const isProductExit = yield product_model_1.default.findById(id);
    if (!isProductExit)
        throw new AppError_1.AppError(404, "sorry, This product doesn't exit!!");
    const result = yield product_model_1.default.findById(id);
    return result;
});
// update a Specific Product by ID
const updateSpeaceficProduct = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // product exit or not?
    const isProductExit = yield product_model_1.default.findById(id);
    if (!isProductExit)
        throw new AppError_1.AppError(404, "sorry, This product doesn't exit!!");
    const result = yield product_model_1.default.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
// delete a Specific Product by ID
const deleteSpeaceficProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    // product exit or not?
    const isProductExit = yield product_model_1.default.findById(id);
    if (!isProductExit)
        throw new AppError_1.AppError(404, "sorry, This product doesn't exit!!");
    yield product_model_1.default.deleteOne({ _id: id });
    return null;
});
exports.ProductServices = {
    createProduct,
    getAllProduct,
    getSpeaceficProduct,
    updateSpeaceficProduct,
    deleteSpeaceficProduct,
};
