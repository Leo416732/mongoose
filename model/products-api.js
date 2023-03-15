import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema(
  {
    name: { type: String, required: true },
    price: {
      type: Number,
      required: true,
    },
    stock: { type: Number, required: true },
    sale: Number,
    category: { type: String, required: true },
    spec: { type: [], required: false },
    description: String,
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
