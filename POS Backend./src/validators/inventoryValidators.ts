/** @format */

import { body } from "express-validator";

export const inventoryValidator = [
  body("Request.ItemName").notEmpty().withMessage("Item Name is required."),
  body("Request.ItemCode").notEmpty().withMessage("Item Code is required."),
  body("Request.Brand").notEmpty().withMessage("Brand is required."),
  body("Request.Category").notEmpty().withMessage("Category is required."),
  body("Request.Description")
    .notEmpty()
    .withMessage("Description is required."),
  body("Request.Discount")
    .isNumeric()
    .withMessage("Discount must be a number."),
  body("Request.UnitPrice")
    .isNumeric()
    .withMessage("Unit Price must be a number."),
  body("Request.IsActive")
    .isBoolean()
    .withMessage("IsActive must be a boolean."),
  body("Image").custom((value, { req }) => {
    if (!req.file) {
      throw new Error("Image is required.");
    }
    return true;
  }),
];
