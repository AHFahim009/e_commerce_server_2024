"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const validationGuard_1 = __importDefault(require("../../middlewares/validationGuard"));
const product_validation_1 = require("./product.validation");
const router = (0, express_1.Router)();
router.post("/", (0, validationGuard_1.default)(product_validation_1.ProductValidation.ProductSchema), product_controller_1.ProductControllers.createProduct);
router.get("/", product_controller_1.ProductControllers.getAllProduct);
router.get("/:productId", product_controller_1.ProductControllers.getSpeaceficProduct);
router.put("/:productId", (0, validationGuard_1.default)(product_validation_1.ProductValidation.updateProductSchema), product_controller_1.ProductControllers.updateSpeaceficProduct);
router.delete("/:productId", product_controller_1.ProductControllers.deleteSpeaceficProduct);
exports.ProductRoutes = router;
