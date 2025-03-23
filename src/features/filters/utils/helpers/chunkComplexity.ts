export function chunkComplexity(numbers: string[]): string[] {
  const result = [];
  let index = 0;
  const sizes = [3, 3, 2, 2];

  for (const size of sizes) {
    if (index >= numbers.length) break;
    const chunk = numbers.slice(index, index + size).join(",");
    result.push(chunk);
    index += size;
  }

  if (index < numbers.length) {
    const remaining = numbers.slice(index).join(",");
    result.push(remaining);
  }

  return result;
}
