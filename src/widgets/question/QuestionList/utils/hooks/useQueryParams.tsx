import { useAppDispatch } from "@/app/appStore";
import { changeFilters } from "@/features/filters/model/filtersSlice";
import { IFilters } from "@/features/filters/model/types";
import { removeEmptyProperties } from "@/shared/utils/helpers/removeEmptyProperties";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useSearchParams } from "react-router";

const useQueryParams = (
  setCurrentPage: Dispatch<SetStateAction<number>>,
  filters: IFilters,
  currentPage: number
): void => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();

  const renderCount = useRef(0);

  function isValidQuery() {
    return (
      renderCount.current === 0 &&
      searchParams.has("page") &&
      searchParams.has("specialization") &&
      !isNaN(Number(searchParams.get("specialization"))) &&
      !!Number(searchParams.get("specialization")) &&
      !isNaN(Number(searchParams.get("page"))) &&
      !!Number(searchParams.get("page"))
    );
  }

  useEffect(() => {
    if (isValidQuery()) {
      for (const query of searchParams) {
        renderCount.current += 1;

        if (query[0] === "limit") continue;

        if (query[0] === "page") {
          setCurrentPage(Number(query[1]));
          continue;
        }

        if (query[0] in filters) {
          dispatch(changeFilters([query[0] as keyof IFilters, query[1]]));
        }
      }
    } else {
      const filtersForReq = { ...filters };
      const query = removeEmptyProperties(filtersForReq);
      delete query["limit"];
      setSearchParams((prev) => ({ ...prev, page: currentPage, ...query }));
    }
  }, [filters, currentPage, searchParams]);
};

export default useQueryParams;
