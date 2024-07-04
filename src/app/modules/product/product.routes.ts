import { Router } from "express";
import { ProductControllers } from "./product.controller";
import validationGuard from "../../middlewares/validationGuard";
import { ProductValidation } from "./product.validation";

const router = Router();

router.post("/", validationGuard(ProductValidation.ProductSchema), ProductControllers.createProduct)
router.get("/", ProductControllers.getAllProduct)
router.get("/:productId", ProductControllers.getSpeaceficProduct)
router.put("/:productId", validationGuard(ProductValidation.updateProductSchema), ProductControllers.updateSpeaceficProduct)
router.delete("/:productId", ProductControllers.deleteSpeaceficProduct)


export const ProductRoutes = router;
