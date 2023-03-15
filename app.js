import express from "express";
import cors from "cors";
import products_router from "./routes/products.js";

const app = express();
const port = 2000;
app.use(cors());
app.use(express.json());
app.use(products_router);

app.listen(port, () => {
  console.log(`Server start ${port}`);
});
