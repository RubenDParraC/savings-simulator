// Types
import type { Product } from "@/types/product";

/**
 * ProductCard
 *
 * Presentational component responsible for displaying
 * basic product information.
 *
 * It receives a Product object and renders:
 * - Product name
 * - Product type
 * - Interest rate
 *
 * This component is intentionally stateless and reusable.
 */
export const ProductCard = ({ product }: { product: Product }) => (
  <div className="border rounded p-4 shadow-md text-slate-700 shadow-slate-400">
    {/* Product name */}
    <h3 className="font-semibold">{product.name}</h3>

    {/* Product type */}
    <p className="text-sm">{product.type}</p>

    {/* Interest rate */}
    <p className="text-sm mt-2">
      Tasa: <strong>{product.interestRate}%</strong>
    </p>
  </div>
);
