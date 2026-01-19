// data
import products from "@/data/products.json";

// types
import type { Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  return products;
};
