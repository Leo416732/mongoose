import Products from "../model/products-api.js";
import moment from "moment";
import "../config/mongoose-config.js";

//get products
export async function getProducts() {
  return await Products.findOne();
}

//post product
export async function postProducts(newProd) {
  const date = moment().format("llll");
  return await Products.create({
    name: newProd.name,
    price: newProd.price,
    stock: newProd.stock,
    category: newProd.category,
    description: newProd.description,
    spec: newProd.spec,
    created_date: date,
  }).then("post product");
}

//delete product
export async function deleteProduct(deleteProName) {
  return await Products.deleteMany({ name: deleteProName }).then(
    "delete product"
  );
}

//update product
export async function putProduct(oldProName, newProName) {
  return await Products.updateOne(
    { name: oldProName },
    { name: newProName }
  ).then("update product");
}
