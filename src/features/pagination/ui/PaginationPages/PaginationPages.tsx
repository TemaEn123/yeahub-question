import { memo } from "react";
import styles from "../Pagination/styles.module.scss";

interface Props {
  pageRange: (string | number)[];
  goToPage: (page: number) => void;
  currentPage: number;
}

const PaginationPages = memo(({ pageRange, goToPage, currentPage }: Props) => {
  return (
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
  );
});

export default PaginationPages;
