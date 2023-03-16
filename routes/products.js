import express from "express";
import {
  getProducts,
  postProducts,
  deleteProduct,
  putProduct,
} from "../services/prods-service.js";

const products_router = express.Router();

// get products
products_router.get("/products", async (req, res) => {
  const result = await getProducts();
  res.status(200).json(result);
});

// post product
products_router.post("/products", async (req, res) => {
  const newProd = req.body;
  const result = await postProducts(newProd);
});

//delete product
products_router.delete("/product/delete", async (req, res) => {
  const deleteProName = req.query.name;
  const result = await deleteProduct(deleteProName);
});

//put product
products_router.put("/product/update", async (req, res) => {
  const oldProName = req.query.name;
  const newProName = req.body.name;
  const result = await putProduct(oldProName, newProName);
});

export default products_router;
