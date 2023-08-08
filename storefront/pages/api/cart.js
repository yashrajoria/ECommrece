import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import React from "react";

async function getCartProducts(req, res) {
  await mongooseConnect();
  const ids = req.body.ids;
  res.json(await Product.find({ _id: ids }));
}

export default getCartProducts;
