"use client";

import { useState } from "react";

// Business logic
import { calculateInvestment } from "@/lib/simulator";

// Validators
import { isPositive } from "@/lib/validators";

// UI components
import { Input } from "@/components/input/input";

// Utils
import { formatCurrency, parseCurrency } from "./utils";

/**
 * SimulatorPage
 *
 * Client Component that allows users to simulate a savings investment
 * based on an initial amount, a monthly contribution, and a time period.
 *
 * It includes:
 * - Input validation
 * - Real-time currency formatting
 * - User-friendly error messages
 * - Estimated result calculation
 */
export default function SimulatorPage() {
  /**
   * Initial investment amount (numeric value).
   */
  const [initial, setInitial] = useState<number>(0);

  /**
   * Monthly contribution amount (numeric value).
   */
  const [monthly, setMonthly] = useState<number>(0);

  /**
   * Investment duration in months.
   * Stored as string to allow controlled numeric input behavior.
   */
  const [months, setMonths] = useState<string>("");

  /**
   * Calculated investment result.
   * Null indicates that the calculation has not been executed yet.
   */
  const [result, setResult] = useState<number | null>(null);

  /**
   * Stores validation or calculation errors.
   */
  const [error, setError] = useState<string>("");

  /**
   * Handles the investment calculation.
   * - Parses input values
   * - Validates that all values are positive or zero
   * - Executes the investment calculation logic
   */
  const handleCalculate = () => {
    const initialValue = Number(initial);
    const monthlyValue = Number(monthly);
    const monthsValue = Number(months);

    if (![initialValue, monthlyValue, monthsValue].every(isPositive)) {
      setError("Todos los valores deben ser mayores o iguales a cero");
      return;
    }

    setError("");
    setResult(calculateInvestment(initialValue, monthlyValue, monthsValue));
  };

  return (
    <div className="w-screen flex flex-col gap-8 p-10 md:px-24">
      <h1 className="text-xl font-bold text-slate-700">Simulador de Ahorro</h1>

      {/**
       * Displays the calculated result once available.
       * The value is formatted as Colombian Peso (COP).
       */}
      {result && (
        <p className="mt-4 font-semibold text-slate-700">
          Resultado estimado:{" "}
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
          }).format(result)}
        </p>
      )}

      {/**
       * Initial investment input.
       * Displays currency formatting while storing a numeric value internally.
       */}
      <Input
        label="Monto inicial"
        type="text"
        inputMode="numeric"
        placeholder="ej. 1.000.000"
        value={formatCurrency(initial)}
        onChange={(e) => setInitial(parseCurrency(e.target.value))}
      />

      {/**
       * Monthly contribution input.
       * Uses the same currency formatting logic as the initial amount.
       */}
      <Input
        label="Aporte mensual"
        type="text"
        inputMode="numeric"
        placeholder="ej. 1.000.000"
        value={formatCurrency(monthly)}
        onChange={(e) => setMonthly(parseCurrency(e.target.value))}
      />

      {/**
       * Investment duration input (months).
       * Restricted to non-negative integer values.
       */}
      <Input
        label="Meses"
        type="number"
        min={0}
        step={1}
        placeholder="ej. 5"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
      />

      {/**
       * Displays validation errors if any.
       */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/**
       * Triggers the investment calculation.
       */}
      <button
        onClick={handleCalculate}
        className="mt-4 bg-slate-700 hover:bg-slate-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Calcular
      </button>
    </div>
  );
}
