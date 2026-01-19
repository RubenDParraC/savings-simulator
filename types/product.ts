/**
 * Product
 *
 * Represents a savings product available in the application.
 * This interface defines the core domain properties used
 * across listing, filtering and simulation features.
 */
export interface Product {
  /**
   * Unique identifier of the product.
   */
  id: string;

  /**
   * Display name of the savings product.
   */
  name: string;

  /**
   * Product type (e.g. Digital, Traditional).
   * Used for categorization and filtering.
   */
  type: string;

  /**
   * Annual interest rate expressed as a percentage.
   */
  interestRate: number;
}
