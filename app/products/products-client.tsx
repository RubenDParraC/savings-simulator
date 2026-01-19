"use client";

import { useEffect, useState } from "react";

// UI components
import { Input } from "@/components/input/input";
import { ProductCard } from "@/components/product-card/product-card";

// Types
import type { Product } from "@/types/product";
import type { ProductsClientProps } from "./types";

/**
 * ProductsClient
 *
 * Client Component responsible for handling user interactions
 * such as searching and filtering products in real time.
 *
 * It receives the product list from a Server Component and applies
 * client-side filtering with a debounce strategy to improve performance.
 */
export const ProductsClient = ({ products }: ProductsClientProps) => {
  /**
   * Stores the current search term entered by the user.
   */
  const [search, setSearch] = useState("");

  /**
   * Stores the filtered list of products based on the search term.
   * Initialized with the full product list.
   */
  const [filtered, setFiltered] = useState<Product[]>(products);

  /**
   * Applies real-time filtering with debounce.
   * The filtering is executed 300ms after the user stops typing
   * to avoid unnecessary re-renders and improve UX.
   */
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

    /**
     * Cleanup function to clear the timeout
     * when the effect is re-triggered or unmounted.
     */
    return () => clearTimeout(timeout);
  }, [search, products]);

  return (
    <div className="flex flex-col gap-5">
      {/**
       * Search input.
       * Filters products by name or type in real time.
       */}
      <Input
        type="text"
        value={search}
        placeholder="Buscar por nombre o tipo"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/**
       * Product list rendered after filtering.
       */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
