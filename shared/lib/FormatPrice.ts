
export function formatPrice(value: string | number) {
  const n = Number(value);
  if (Number.isNaN(n)) return String(value);
  return n.toLocaleString("ru-RU", { maximumFractionDigits: 2 });
}