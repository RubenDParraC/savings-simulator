// Types
import type { InputProps } from "./types";

/**
 * Input
 *
 * Reusable and accessible input component.
 * Supports labels, validation error messages and all native
 * HTML input attributes via props spreading.
 */
export const Input = ({ label, error, ...props }: InputProps) => (
  <div className="flex flex-col gap-1">
    {/* Optional input label */}
    {label && <label className="text-sm font-medium">{label}</label>}

    {/* Native input element */}
    <input
      {...props}
      className="border rounded px-3 py-2 focus:outline-none focus:ring"
    />

    {/* Validation error message */}
    {error && <span className="text-red-500 text-xs">{error}</span>}
  </div>
);
