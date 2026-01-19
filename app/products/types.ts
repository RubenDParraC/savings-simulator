// types
import type { Product } from "@/types/product";

/**
 * ProductsClientProps
 *
 * Defines the props expected by the ProductsClient component.
 * It receives a list of products fetched on the server side
 * and uses them for client-side filtering and rendering.
 */
export interface ProductsClientProps {
  /**
   * List of savings products.
   */
  products: Product[];
}
