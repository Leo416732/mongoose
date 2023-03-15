import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema(
  {
    name: String,
    price: {
      type: Number,
      required: true,
    },
    stock: Number,
    sale: String,
    category: String,
    spec: [],
    description: String,
    id: String,
  },
  {
    collection: "products",
  }
);

// const productsSchema = new Schema({
//     collactions : ""
// })

const Products = mongoose.model("Products", productsSchema, "products");

export default Products;
