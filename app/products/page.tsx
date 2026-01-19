// lib
import { getProducts } from "@/lib/products";

// components
import { ProductsClient } from "./products-client";

/**
 * Enables Incremental Static Regeneration (ISR).
 * The page will be revalidated every 60 seconds,
 * ensuring relatively fresh data while keeping
 * the performance benefits of static rendering.
 */
export const revalidate = 60; // ISR

/**
 * ProductsPage
 *
 * Server Component responsible for fetching the list of savings products.
 * Data fetching is executed on the server to improve performance,
 * SEO, and initial page load.
 *
 * Client-side interactions such as filtering and searching are delegated
 * to the `ProductsClient` component.
 */
export default async function ProductsPage() {
  /**
   * Fetch products from a local data source or service.
   * This logic can be easily replaced by an API or backend service.
   */
  const products = await getProducts();

  return (
    <div className="w-full flex flex-col gap-8 p-10 md:px-24">
      <h1 className="text-xl font-bold text-slate-700">Productos de Ahorro</h1>

      {/**
       * Client Component:
       * Handles real-time filtering and search logic (debounce).
       * This keeps the Server Component clean and focused on data fetching.
       */}
      <ProductsClient products={products} />
    </div>
  );
}
