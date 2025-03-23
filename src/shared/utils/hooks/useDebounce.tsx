import { useEffect, useState } from "react";

const useDebounce = (searchValue: string, delay: number): string => {
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    const t = setTimeout(() => {
      setDebouncedSearch(searchValue);
    }, delay);

    return () => clearTimeout(t);
  }, [searchValue, delay]);

  return debouncedSearch;
};

export default useDebounce;
