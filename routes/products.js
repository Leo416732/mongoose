import express from "express";
import { getProducts } from "../services/prods-service.js";

const products_router = express.Router();

products_router.get("/products", async (req, res) => {
  const result = await getProducts();
  console.log(result);
  res.status(200).json(result);
});

export default products_router;
