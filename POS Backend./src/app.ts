/** @format */

import cookieParser from "cookie-parser";
import cors from "cors";
import csrf from "csurf";
import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import InventoryModel from "./modal/inventoryModal";
import orderModel from "./modal/orderModal";
import authRouter from "./routes/auth";
import productRouter from "./routes/inventory";
import orderRouter from "./routes/order";

import authMiddleware from "./middlewares/authMiddleware";
import { CustomError, IErrorResponse } from "./utils/error-handler";
import { logAPICall } from "./utils/logger";

const stripe = require("stripe")(
  "sk_test_51KbjdEGbggZE4zd2eBc0ZkW9qtanwSpklg8Pg4rXgvrCCktxhwcuuiStW716aNaVmxOjQzZ7DYCz7ibce4fqCzHj00pnoJclSl"
);

dotenv.config();

// import userRoutes from "./routes/userRoutes";

const app = express();

app.use(cookieParser());

const csrfProtection = csrf({
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Set to true in production
  },
});
app.use(csrfProtection);

// Add CSRF token to the response locals to make it accessible in your views
// app.use((req, res, next) => {
//   res.locals.csrfToken = req.csrfToken();
//   next();
// });

// Middleware
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.static("public"));
app.use(logAPICall);
// Mount the authentication routes
app.use("/auth", authRouter);
app.use("/product", authMiddleware, productRouter);
app.use("/order", authMiddleware, orderRouter);

app.use("/payment", authMiddleware, async (req: Request, res: Response) => {
  const { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Spatula company",
      payment_method: id,
      confirm: true,
      return_url: "http://localhost:3001", // Replace with the actual return URL
    });

    console.log("Payment", payment);

    // If the payment requires action, return the client secret and action URL
    if (payment.status === "requires_action") {
      return res.json({
        requires_action: true,
        payment_intent_client_secret: payment.client_secret,
        action_url: payment.next_action.redirect_to_url.url,
      });
    } else {
      // Payment succeeded
      return res.json({
        message: "Payment successful",
        success: true,
      });
    }
  } catch (error: any) {
    console.log("Error", error);

    // Handle different types of errors
    if (error.type === "StripeCardError") {
      // Handle card errors
      return res.json({
        message: "Card error",
        success: false,
      });
    } else {
      // Other types of errors
      return res.json({
        message: "Payment failed",
        success: false,
      });
    }
  }
});

// Endpoint to provide CSRF token to the frontend
app.get("/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

app.use(
  "/getDashboardData",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const recentProducts = await InventoryModel.find()
        .sort({ _id: -1 })
        .limit(5);
      const totalProductsInInventory = await InventoryModel.countDocuments();
      const totalOrders = await orderModel.countDocuments();
      const allOrders = await orderModel.find();

      let totalSales = 0;
      allOrders.forEach((order) => {
        const orderTotal = parseFloat(order.TotalAmount); // Convert to a floating-point number
        if (!isNaN(orderTotal)) {
          totalSales += orderTotal;
        }
      });

      res.status(200).json({
        recentlyAddedProducts: recentProducts,
        dashboardData: {
          totalOrders: totalOrders?.toString(),
          customers: "N/A",
          totalSales: totalSales.toFixed(2),
          totalProducts: totalProductsInInventory?.toString(),
        },
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

app.use(
  (error: IErrorResponse, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json(error.serializeError());
    }
    next(error);
  }
);

// MongoDB Connection

const mongoURI = process.env.MONGO_URI || ""; // Replace 'mydatabase' with your actual database name
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Routes
// app.use("/users", userRoutes);

export default app;
