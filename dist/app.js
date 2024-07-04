"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const globalErrorHandler_1 = require("./app/middlewares/globalErrorHandler");
const apiNotFound_1 = __importDefault(require("./app/middlewares/apiNotFound"));
// config express application.
const app = (0, express_1.default)();
// parser, cors...
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//  routes..
app.use("/api", routes_1.ApplicationRoutes);
// testing routes
app.get("/", (req, res) => {
    res.json({
        status: 200,
        success: true,
        message: "E Commerce server...",
    });
});
// global error handle
app.use(globalErrorHandler_1.globalErrorHandler);
// no route found
app.use(apiNotFound_1.default);
exports.default = app;
