/** @format */

import express, { Router } from "express";
import {
  createUpdateProduct,
  deleteProduct,
  getAllProducts,
} from "../contollers/inventoryController";
import upload from "../services/multer-config";

const router: Router = express.Router();

router.post(
  "/createUpdateProduct",
  upload.single("image"),
  createUpdateProduct
);
router.get("/getAllProducts", getAllProducts);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
