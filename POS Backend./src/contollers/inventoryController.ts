/** @format */

import { Request, Response } from "express";
import mongoose from "mongoose";
import { IRequest } from "../interfaces/inventoryInterfaces";
import InventoryModel from "../modal/inventoryModal";
import { paginate } from "../utils/paginate";

export async function createUpdateProduct(req: Request, res: Response) {
  try {
    console.log("Request body", req.body.Request);
    console.log("file", req.file);
    const RequestBody = JSON.parse(req.body.Request);

    // Check if a file is uploaded
    if (!req.file && !RequestBody.Id) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const {
      Id,
      ItemName,
      ItemCode,
      Brand,
      Category,
      Description,
      Discount,
      UnitPrice,
      IsActive,
    } = RequestBody;

    // Create a new request object
    const request = {
      ItemName,
      ItemImage: req.file?.filename,
      ItemCode,
      Brand,
      Category,
      Description,
      Discount,
      UnitPrice,
      IsActive,
    };

    if (Id) {
      // Update the document if id is present in the request
      const currentProduct: IRequest | null = await InventoryModel.findById(Id);

      await InventoryModel.findByIdAndUpdate(Id, {
        ...request,
        ItemImage: req.file?.filename
          ? req.file.filename
          : currentProduct?.ItemImage,
      });
      return res.status(200).json({
        message: "Product Updated Successfully !",
      });
    } else {
      // Create a new inventory document
      // Add a custom timestamp

      const inventory = new InventoryModel(request);

      // Save the inventory to the database
      await inventory.save();
      res.status(201).json({ message: "Product created successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
}

export async function getAllProducts(req: Request, res: Response) {
  try {
    const page: number = parseInt(req.query.page as string) || 1;
    const perPage: number = parseInt(req.query.perPage as string) || 10;

    const PaginationResult = await paginate(InventoryModel, {}, page, perPage);
    res.status(200).json(PaginationResult);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}
export async function deleteProduct(req: Request, res: Response) {
  try {
    const toBeDeletedId: string = req.params.id;
    console.log("to be deleted id ", toBeDeletedId);
    const validObjectId = mongoose.Types.ObjectId.isValid(toBeDeletedId);

    if (!validObjectId) {
      res.status(400).json({ message: "Invalid Product ID" });
      return;
    }

    const deletedProduct = await InventoryModel.findByIdAndRemove(
      toBeDeletedId
    );
    console.log("deleted product", deletedProduct);

    if (!deletedProduct) {
      res.status(404).json({ message: "Product not found!" });
    } else {
      res.status(200).json({ message: "Product Deleted Successfully!" });
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
