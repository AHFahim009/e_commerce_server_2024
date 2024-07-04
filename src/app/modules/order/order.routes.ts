import { Router } from "express";
import { OrderControllers } from "./order.controllers";
import validationGuard from "../../middlewares/validationGuard";
import { OrderValidation } from "./order.validation";

const router = Router();

router.post(
  "/",
  validationGuard(OrderValidation.OrderSchema),
  OrderControllers.createOrder
);
router.get("/", OrderControllers.getAllOrder);


export const OrderRoutes = router;
