"use client";

import { useState } from "react";

// lib
import { calculateInvestment } from "@/lib/simulator";

// validator
import { isPositive } from "@/lib/validators";

// components
import { Input } from "@/components/input/input";

export default function SimulatorPage() {
  const [initial, setInitial] = useState("");
  const [monthly, setMonthly] = useState("");
  const [months, setMonths] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

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

      {result && (
        <p className="mt-4 font-semibold text-slate-700">
          Resultado estimado:{" "}
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
          }).format(result)}
        </p>
      )}

      <Input
        label="Monto inicial"
        type="number"
        min={0}
        value={initial}
        onChange={(e) => setInitial(e.target.value)}
      />

      <Input
        label="Aporte mensual"
        type="number"
        min={0}
        value={monthly}
        onChange={(e) => setMonthly(e.target.value)}
      />

      <Input
        label="Meses"
        type="number"
        min={0}
        step={1}
        value={months}
        onChange={(e) => setMonths(e.target.value)}
      />

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <button
        onClick={handleCalculate}
        className="mt-4 bg-slate-700 hover:bg-slate-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        Calcular
      </button>
    </div>
  );
}
