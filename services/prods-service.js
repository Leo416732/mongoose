import Products from "../model/products-api.js";
import "../config/mongoose-config.js";

export async function getProducts() {
  return await Products.findOne();
}

export async function postProducts(newProd) {
  console.log(newProd);
  return await Products.create({
    name: newProd.name,
    price: newProd.price,
    stock: newProd.stock,
    category: newProd.category,
    description: newProd.description,
    spec: newProd.spec,
  }).then("post product");
}

export async function deleteProduct(deleteProName) {
  console.log(deleteProName);
  return await Products.deleteOne({ name: deleteProName }).then(
    "delete product"
  );
}

export async function putProduct(oldProName, newProName) {
  return await Products.updateOne(
    { name: oldProName },
    { name: newProName }
  ).then("update product");
}
