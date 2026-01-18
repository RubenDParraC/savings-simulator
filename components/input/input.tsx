// types
import type { InputProps } from "./types";

export const Input = ({ label, error, ...props }: InputProps) => (
  <div className="flex flex-col gap-1">
    {label && <label className="text-sm font-medium">{label}</label>}
    <input
      {...props}
      className="border rounded px-3 py-2 focus:outline-none focus:ring"
    />
    {error && <span className="text-red-500 text-xs">{error}</span>}
  </div>
);
