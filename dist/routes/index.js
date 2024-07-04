"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationRoutes = void 0;
const express_1 = require("express");
const product_routes_1 = require("../app/modules/product/product.routes");
const order_routes_1 = require("../app/modules/order/order.routes");
const router = (0, express_1.Router)();
const routes = [
    {
        root: "/products",
        endpoints: product_routes_1.ProductRoutes,
    },
    {
        root: "/orders",
        endpoints: order_routes_1.OrderRoutes,
    },
];
routes.forEach((item) => router.use(item.root, item.endpoints));
exports.ApplicationRoutes = router;
