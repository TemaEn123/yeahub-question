import { useContext } from "react";
import { FiltersContext } from "../../model/FiltersContext";

export const useFilters = () => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("context error");
  }

  return context;
};
