import { useAppDispatch } from "@/app/appStore";
import { useState } from "react";
import { changeFilters } from "../../model/filtersSlice";
import { IFilters, ISpecialization } from "../../model/types";
import { useSearchParams } from "react-router";
import { chunkComplexity } from "../helpers/chunkComplexity";

const useFiltersHandler = (
  key: keyof IFilters
): [string[], (value: string | ISpecialization) => void] => {
  const [searchParams] = useSearchParams();

  let initialValue: string[] = [];

  if (key === "rate") {
    initialValue = searchParams.get("rate")?.split(",") ?? [];
  }
  if (key === "skills") {
    initialValue = searchParams.get("skills")?.split(",") ?? [];
  }
  if (key === "complexity") {
    const numbers = searchParams.get("complexity")?.split(",");

    initialValue = numbers ? chunkComplexity(numbers) : [];
  }

  const [activeBtns, setActiveBtns] = useState<string[]>(initialValue);

  const dispatch = useAppDispatch();

  const handleFiltersBtnClick = (value: string | ISpecialization): void => {
    if (typeof value !== "string") throw new Error("используй правильный тип");

    if (activeBtns.includes(value)) {
      const newValue = activeBtns.filter((item) => item !== value);
      setActiveBtns(newValue);
      dispatch(changeFilters([key, newValue.join(",")]));
    } else {
      const newValue = [...activeBtns, value];
      setActiveBtns(newValue);
      dispatch(changeFilters([key, newValue.join(",")]));
    }
  };

  return [activeBtns, handleFiltersBtnClick];
};

export default useFiltersHandler;
