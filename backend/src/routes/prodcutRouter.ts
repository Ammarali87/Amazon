import express from "express";
import asyncHandler from "express-async-handler";
import ProductModel from "../models/ProductModel"; // Adjust the import path as needed

const productRouter = express.Router();

// Route to get a product by slug
productRouter.get("/slug/:slug", asyncHandler(async (req, res) => {
  const product = await ProductModel.findOne({ slug: req.params.slug });

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}));

export default productRouter;
