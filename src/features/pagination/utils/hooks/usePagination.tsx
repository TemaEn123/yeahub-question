import { Dispatch, useCallback } from "react";
import { UsePaginationReturn } from "../../model/types";

const usePagination = (
  totalPages: number,
  currentPage: number,
  setCurrentPage: Dispatch<React.SetStateAction<number>>
): UsePaginationReturn => {
  const goToPreviousPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }, []);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }, [totalPages]);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const getPageRange = useCallback(() => {
    const range = [];
    if (totalPages > 7) {
      const start =
        currentPage > totalPages - 5
          ? totalPages - 5
          : Math.max(2, currentPage - 2);
      const end =
        currentPage < 5 ? 6 : Math.min(totalPages - 1, currentPage + 2);

      range.push(1);

      if (currentPage - 2 > 2) {
        range.push("...");
      }

      for (let i = start; i <= end; i++) {
        range.push(i);
      }

      if (currentPage + 2 < totalPages - 1) {
        range.push("...");
      }

      range.push(totalPages);
    } else {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    }

    return range;
  }, [currentPage, totalPages]);

  return [goToPreviousPage, goToNextPage, goToPage, getPageRange, currentPage];
};

export default usePagination;
