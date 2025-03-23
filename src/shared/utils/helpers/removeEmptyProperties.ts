export function removeEmptyProperties<T extends object>(obj: T): Partial<T> {
  const result: Partial<T> = { ...obj };

  for (const key in result) {
    if (Object.prototype.hasOwnProperty.call(result, key)) {
      const value = result[key];
      if (value === "") {
        delete result[key];
      }
    }
  }

  return result;
}
