"use client";

import { useEffect, useState } from "react";

// components
import { Input } from "@/components/input/input";
import { ProductCard } from "@/components/product-card/product-card";

// types
import type { Product } from "@/types/product";
import type { ProductsClientProps } from "./types";

export const ProductsClient = ({ products }: ProductsClientProps) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Product[]>(products);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const normalizedSearch = search.toLowerCase();

      setFiltered(
        products.filter(
          (product) =>
            product.name.toLowerCase().includes(normalizedSearch) ||
            product.type.toLowerCase().includes(normalizedSearch),
        ),
      );
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, products]);

  return (
    <div className="flex flex-col gap-5">
      <Input
        type="text"
        value={search}
        placeholder="Buscar por nombre o tipo"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
