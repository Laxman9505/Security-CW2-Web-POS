/** @format */

import express, { Router } from "express";
import { getAllOrders, placeOrder } from "../contollers/orderController";

const router: Router = express.Router();

router.post("/placeOrder", placeOrder);
router.get("/getAllOrders", getAllOrders);

export default router;
