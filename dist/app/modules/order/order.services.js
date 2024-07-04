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
exports.OrderServices = void 0;
const AppError_1 = require("../../error/AppError");
const product_model_1 = __importDefault(require("../product/product.model"));
const order_model_1 = __importDefault(require("./order.model"));
const createOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, quantity } = payload;
    const isProductExit = yield product_model_1.default.findOne({ _id: productId });
    if (!isProductExit)
        throw new AppError_1.AppError(404, "sorry! this product doesn't exit");
    // product price !
    payload.price = isProductExit.price;
    // Step 1: Decrement the inventory quantity
    const updatedProduct = yield product_model_1.default.findOneAndUpdate({
        _id: productId,
        "inventory.quantity": { $gte: quantity },
    }, {
        $inc: { "inventory.quantity": -quantity },
    }, { new: true } // Return the updated document
    );
    if (!updatedProduct) {
        throw new Error("sorry, insufficient stock!!");
    }
    // Step 2: Update the inStock status based on the new quantity
    const inStock = updatedProduct.inventory.quantity > 0; // false or true
    yield product_model_1.default.findOneAndUpdate({ _id: productId }, { $set: { "inventory.inStock": inStock } });
    // if all step pass successfully then create a new order!!
    const result = yield order_model_1.default.create(payload);
    return result;
});
const getAllOrder = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const email = query === null || query === void 0 ? void 0 : query.email;
    const filterObj = {};
    if (email) {
        filterObj["email"] = email;
    }
    const result = yield order_model_1.default.find(filterObj);
    return result;
});
exports.OrderServices = {
    createOrder,
    getAllOrder,
};
