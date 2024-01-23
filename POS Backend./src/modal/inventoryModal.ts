/** @format */

import { Schema, model } from "mongoose";
import { IInventory, IRequest } from "../interfaces/inventoryInterfaces";

const InventorySchema: Schema = new Schema<IRequest>(
  {
    ItemName: {
      type: String,
      required: true,
    },
    ItemImage: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
    },
    ItemCode: {
      type: String,
      required: true,
    },
    Brand: {
      type: String,
    },
    Category: {
      type: String,
      required: true,
    },
    Discount: {
      type: Number,
    },
    UnitPrice: {
      type: Number,
      required: true,
    },
    IsActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    versionKey: false,
    toJSON: { virtuals: true },
    id: false,
  }
);

const InventoryModel = model<IInventory>("Inventory", InventorySchema);
export default InventoryModel;
