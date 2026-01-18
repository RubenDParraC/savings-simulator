import products from "@/data/products.json";
import { Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  return products;
};
