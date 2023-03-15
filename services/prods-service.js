import Products from "../model/products-api.js";
import "../config/mongoose-config.js";

export async function getProducts() {
  return await Products.findOne();
}
