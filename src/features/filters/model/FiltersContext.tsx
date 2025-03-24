import { createContext } from "react";

interface IFiltersContext {
  isShow: boolean;
  toggleShow: () => void;
}

export const FiltersContext = createContext<IFiltersContext | undefined>(
  undefined
);
