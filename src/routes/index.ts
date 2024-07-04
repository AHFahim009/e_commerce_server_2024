import { Router } from "express";
import { ProductRoutes } from "../app/modules/product/product.routes";
import { OrderRoutes } from "../app/modules/order/order.routes";

const router = Router();

const routes = [
  {
    root: "/products",
    endpoints: ProductRoutes,
  },
  {
    root: "/orders",
    endpoints: OrderRoutes,
  },
];

routes.forEach((item) => router.use(item.root, item.endpoints));
export const ApplicationRoutes = router;
