/** @format */

import express, { Router } from "express";
import {
  createUpdateProduct,
  deleteProduct,
  getAllProducts,
} from "../contollers/inventoryController";
import { csrfProtection } from "../middlewares/verifyCSRF";
import upload from "../services/multer-config";

const router: Router = express.Router();

router.post(
  "/createUpdateProduct",
  csrfProtection,
  upload.single("image"),
  createUpdateProduct
);
router.get("/getAllProducts", getAllProducts);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
