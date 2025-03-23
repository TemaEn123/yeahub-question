import { searchIcon } from "@/shared/assets";
import styles from "./styles.module.scss";
import { useState, ChangeEvent, useEffect, useRef } from "react";
import { useAppDispatch } from "@/app/appStore";
import { changeFilters } from "@/features/filters/model/filtersSlice";
import useDebounce from "@/shared/utils/hooks/useDebounce";
import { useSearchParams } from "react-router";

const FiltersSearch = () => {
  const [searchParams] = useSearchParams();

  const initialValue = searchParams.get("title") || "";

  const renderCount = useRef(1);

  const [searchValue, setSearchValue] = useState<string>(initialValue);

  const dispatch = useAppDispatch();

  const debouncedSearch = useDebounce(searchValue, 700);

  useEffect(() => {
    if (renderCount.current > 1) {
      dispatch(changeFilters(["title", debouncedSearch]));
    } else {
      renderCount.current++;
    }
  }, [debouncedSearch]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={styles.search}>
      <img src={searchIcon} alt="search" />
      <input
        value={searchValue}
        onChange={(e) => handleSearchChange(e)}
        type="text"
        placeholder="Введите запрос..."
      />
    </div>
  );
};

export default FiltersSearch;
