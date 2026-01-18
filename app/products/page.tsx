// lib
import { getProducts } from "@/lib/products";

// components
import { ProductsClient } from "./products-client";

export const revalidate = 60; // ISR

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="w-screen flex flex-col gap-8 p-10 md:px-24">
      <h1 className="text-2xl font-bold text-slate-700">Productos de Ahorro</h1>

      {/* Filtros en Client Component */}
      <ProductsClient products={products} />
    </div>
  );
}
