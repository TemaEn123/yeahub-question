import { UsePaginationReturn } from "@/shared/interfaces/interfaces";

const usePagination = (
  totalPages: number,
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
): UsePaginationReturn => {
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const getPageRange = () => {
    const range = [];
    const start =
      currentPage > totalPages - 5
        ? totalPages - 5
        : Math.max(2, currentPage - 2);
    const end = currentPage < 5 ? 6 : Math.min(totalPages - 1, currentPage + 2);

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

    return range;
  };

  return [goToPreviousPage, goToNextPage, goToPage, getPageRange, currentPage];
};

export default usePagination;
