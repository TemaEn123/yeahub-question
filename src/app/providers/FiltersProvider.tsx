import { FiltersContext } from "@/features/filters/model/FiltersContext";
import { ReactNode, useState } from "react";

interface FiltersProviderProps {
  children: ReactNode;
}

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <FiltersContext.Provider value={{ isShow, toggleShow }}>
      {children}
    </FiltersContext.Provider>
  );
};
