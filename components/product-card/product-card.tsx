// types
import type { Product } from "@/types/product";

export const ProductCard = ({ product }: { product: Product }) => (
  <div className="border rounded p-4 shadow-md text-slate-700 shadow-slate-400">
    <h3 className="font-semibold">{product.name}</h3>
    <p className="text-sm">{product.type}</p>
    <p className="text-sm mt-2">
      Tasa: <strong>{product.interestRate}%</strong>
    </p>
  </div>
);
