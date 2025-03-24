import styles from "./styles.module.scss";
import PaginationButton from "../PaginationButton/PaginationButton";
import { memo, useMemo } from "react";
import PaginationPages from "../PaginationPages/PaginationPages";

interface Props {
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  goToPage: (page: number) => void;
  getPageRange: () => (string | number)[];
  currentPage: number;
  totalPages: number;
}

const Pagination = memo(
  ({
    goToPreviousPage,
    goToNextPage,
    goToPage,
    getPageRange,
    currentPage,
    totalPages,
  }: Props) => {
    const pageRange = useMemo(() => getPageRange(), [totalPages]);

    return (
      <div className={styles.pagination}>
        <PaginationButton
          dir="left"
          disabled={currentPage === 1}
          handleClick={goToPreviousPage}
        />

        <PaginationPages
          currentPage={currentPage}
          pageRange={pageRange}
          goToPage={goToPage}
        />

        <PaginationButton
          dir="right"
          disabled={currentPage === totalPages}
          handleClick={goToNextPage}
        />
      </div>
    );
  }
);

export default Pagination;
