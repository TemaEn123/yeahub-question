import { useAppDispatch } from "@/app/appStore";
import { useCallback, useMemo, useState } from "react";
import { changeFilters, clearFilters } from "../../model/filtersSlice";
import { IFilters } from "../../model/types";
import { useNavigate, useSearchParams } from "react-router";
import { chunkComplexity } from "../helpers/chunkComplexity";
import { ISpecialization } from "@/shared/interfaces/interfaces";

const useFiltersHandler = (
  key: keyof IFilters,
  type?: "common" | "current"
): [string[], (value: string | ISpecialization) => void] => {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const initialValue = useMemo(() => {
    if (type === "current") {
      return [];
    }

    if (key === "rate") {
      return searchParams.get("rate")?.split(",") ?? [];
    }
    if (key === "skills") {
      return searchParams.get("skills")?.split(",") ?? [];
    }
    if (key === "complexity") {
      const numbers = searchParams.get("complexity")?.split(",");
      return numbers ? chunkComplexity(numbers) : [];
    }
    return [];
  }, [key, searchParams, type]);

  const [activeBtns, setActiveBtns] = useState<string[]>(initialValue);

  const dispatch = useAppDispatch();

  const handleFiltersBtnClick = useCallback(
    (value: string | ISpecialization): void => {
      if (typeof value !== "string")
        throw new Error("используй правильный тип");

      if (activeBtns.includes(value)) {
        const newValue = activeBtns.filter((item) => item !== value);
        setActiveBtns(newValue);
        dispatch(changeFilters([key, newValue.join(",")]));
      } else {
        const newValue = [...activeBtns, value];
        setActiveBtns(newValue);
        dispatch(changeFilters([key, newValue.join(",")]));
      }

      if (type === "current") {
        dispatch(clearFilters());
        dispatch(changeFilters([key, value]));
        navigate(`/?page=1&specialization=11&skills=${value}`);
      }
    },
    [activeBtns, key, type]
  );

  return [activeBtns, handleFiltersBtnClick];
};

export default useFiltersHandler;
