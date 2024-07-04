"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = require("express");
const order_controllers_1 = require("./order.controllers");
const validationGuard_1 = __importDefault(require("../../middlewares/validationGuard"));
const order_validation_1 = require("./order.validation");
const router = (0, express_1.Router)();
router.post("/", (0, validationGuard_1.default)(order_validation_1.OrderValidation.OrderSchema), order_controllers_1.OrderControllers.createOrder);
router.get("/", order_controllers_1.OrderControllers.getAllOrder);
exports.OrderRoutes = router;
