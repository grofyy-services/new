import { Router } from "express";
import { z } from "zod";
import { AppDataSource } from "../dataSource";
import { Product } from "../entity/Product";

export const productRouter = Router();

const repo = AppDataSource.getRepository(Product);

/**
 * GET /api/products
 * returns list of products
 */
productRouter.get("/", async (_req, res) => {
  const products = await repo.find({
    order: { createdAt: "DESC" }
  });
  res.json(products);
});

/**
 * POST /api/products
 * create a product (name, description, price, imageUrl, currency)
 */
productRouter.post("/", async (req, res) => {
  const { name, description, price, imageUrl, currency } = req.body;
  const product = repo.create({
    title: name,
    description,
    price: String(price),
    imageUrl: imageUrl && imageUrl.trim() !== "" ? imageUrl : null,
    currency: currency || "USD",
  });
  const saved = await repo.save(product);
  res.status(201).json(saved);
});


