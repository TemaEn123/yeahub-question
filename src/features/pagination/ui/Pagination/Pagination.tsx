import styles from "./styles.module.scss";
import PaginationButton from "../PaginationButton/PaginationButton";

interface Props {
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  goToPage: (page: number) => void;
  getPageRange: () => (string | number)[];
  currentPage: number;
  totalPages: number;
}

const Pagination = ({
  goToPreviousPage,
  goToNextPage,
  goToPage,
  getPageRange,
  currentPage,
  totalPages,
}: Props) => {
  const pageRange = getPageRange();

  return (
    <div className={styles.pagination}>
      <PaginationButton
        dir="left"
        disabled={currentPage === 1}
        handleClick={goToPreviousPage}
      />

      <div className={styles.pagination__pages}>
        {pageRange.map((page, i) =>
          typeof page === "string" ? (
            <span className={styles.pagination__dots} key={i}>
              ...
            </span>
          ) : (
            <button
              className={`${styles.pagination__page} ${
                currentPage === page && styles.pagination__page_active
              }`}
              key={i}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          )
        )}
      </div>

      <PaginationButton
        dir="right"
        disabled={currentPage === totalPages}
        handleClick={goToNextPage}
      />
    </div>
  );
};

export default Pagination;
