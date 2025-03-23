export function expandRange(value: string): string {
  if (value.length === 1) return value;

  const [start, end] = value.split("-").map(Number);

  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result.join(",");
}
