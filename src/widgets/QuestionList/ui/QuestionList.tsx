import styles from "./styles.module.scss";
import { useGetQuestionsQuery } from "@/entities/question/api/questionApi";
import { Pagination } from "@/features/pagination";
import { getTotalPages } from "@/features/pagination/utils/helpers/getTotalPages";
import usePagination from "@/features/pagination/utils/hocs/usePagination";
import QuestionAccordion from "@/features/question/question-accordion/ui/QuestionAccordion/QuestionAccordion";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import { useState } from "react";

const QuestionList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: questions,
    error,
    isFetching,
    isLoading,
  } = useGetQuestionsQuery(currentPage);

  const totalPages = getTotalPages(questions?.total);

  const [goToPreviousPage, goToNextPage, goToPage, getPageRange] =
    usePagination(totalPages, currentPage, setCurrentPage);

  if (error) {
    console.log(error);
  }

  return (
    <section className={styles.list}>
      <div className={styles.list__header}>
        {isLoading ? (
          <Skeleton css={{ width: 300, height: 30 }} count={1} />
        ) : (
          <h1>Вопросы</h1>
        )}
      </div>
      <ul>
        {isFetching ? (
          <Skeleton
            count={12}
            css={{
              height: 25,
              margin: "24px 0",
              borderBottom: "1px solid #e8e8e8",
            }}
          />
        ) : (
          questions?.data.map((question) => (
            <QuestionAccordion key={question.id} question={question} />
          ))
        )}
      </ul>
      <div className={styles.list__pages}>
        {isLoading ? (
          <Skeleton
            count={10}
            css={{ width: 20, height: 20, marginRight: 10 }}
          />
        ) : (
          <Pagination
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
            goToPage={goToPage}
            getPageRange={getPageRange}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </section>
  );
};

export default QuestionList;
