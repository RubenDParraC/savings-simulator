export const formatCurrency = (value: number) => {
  if (!value) return "";

  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
};

export const parseCurrency = (value: string): number => {
  const parsed = Number(value.replace(/[^\d]/g, ""));
  return isNaN(parsed) ? 0 : parsed;
};
