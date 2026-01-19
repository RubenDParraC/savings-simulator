/**
 * Formats a numeric value into a currency string (COP).
 *
 * This function is used only for presentation purposes.
 * The numeric value is preserved in state to avoid
 * calculation and validation issues.
 *
 * @param value - Numeric value to be formatted
 * @returns Formatted currency string or empty string if value is zero
 */
export const formatCurrency = (value: number) => {
  if (!value) return "";

  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
};

/**
 * Parses a currency-formatted string back into a numeric value.
 *
 * Removes any non-numeric characters such as currency symbols,
 * separators or spaces, ensuring a clean number for calculations.
 *
 * @param value - Currency formatted string
 * @returns Parsed numeric value or 0 if parsing fails
 */
export const parseCurrency = (value: string): number => {
  const parsed = Number(value.replace(/[^\d]/g, ""));
  return isNaN(parsed) ? 0 : parsed;
};
