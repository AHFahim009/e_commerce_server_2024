"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidation = exports.OrderSchema = void 0;
const zod_1 = require("zod");
exports.OrderSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    productId: zod_1.z.string(),
    price: zod_1.z.number().positive().optional(),
    quantity: zod_1.z.number().positive(),
});
exports.OrderValidation = {
    OrderSchema: exports.OrderSchema,
};
