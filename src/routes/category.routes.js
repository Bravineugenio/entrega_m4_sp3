import { Router } from "express";
import createCategoryController from "../controllers/createCategory.controller.js";
import createProductsController from "../controllers/createProducts.controller.js";
import deleteCategoryController from "../controllers/deleteCategory.controller.js";
import getCategoryController from "../controllers/getCategory.controller.js";
import getProductController from "../controllers/getProduct.controller.js";
import listCategoryController from "../controllers/listCategory.controller.js";
import listProductsController from "../controllers/listProducts.controller.js";
import updateCategoryController from "../controllers/updateCategory.controller.js";
import updateProductService from "../services/updateProduct.service.js";
import updateProductController from "../controllers/updateProduct.controller.js";
import deleteProductController from "../controllers/deleteProduct.controller.js";
import listProductByCategoryController from "../controllers/listProductByCategory.controller.js";

const router = Router();

router.get("/categories", listCategoryController);
router.post("/categories", createCategoryController);
router.get("/categories/:id", getCategoryController);
router.patch("/categories/:id", updateCategoryController);
router.delete("/categories/:id", deleteCategoryController);
router.post("/products", createProductsController);
router.get("/products", listProductsController);
router.get("/products/:id", getProductController);
router.patch("/products/:id", updateProductController);
router.delete("/products/:id", deleteProductController);
router.get("/products/category/:id", listProductByCategoryController);

export default router;
