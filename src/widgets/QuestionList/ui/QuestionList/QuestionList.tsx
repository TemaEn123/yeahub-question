import styles from "./styles.module.scss";
import { useAppSelector } from "@/app/appStore";
import { useGetQuestionsQuery } from "@/entities/question/api/questionApi";
import { useState } from "react";
import { selectFilters } from "@/features/filters/model/filtersSlice";
import QuestionHeader from "../QuestionHeader/QuestionHeader";
import Questions from "../Questions/Questions";
import QuestionPagination from "../QuestionPagination/QuestionPagination";
import { useSearchParams } from "react-router";
import useQueryParams from "../../utils/hooks/useQueryParams";

const QuestionList = () => {
  const [searchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );

  const filters = useAppSelector(selectFilters);

  useQueryParams(setCurrentPage, filters, currentPage);

  const {
    data: questions,
    error,
    isFetching,
  } = useGetQuestionsQuery({ ...filters, page: String(currentPage) });

  return (
    <section className={styles.list}>
      {error ? (
        <p className={styles.list__warn}>
          Что-то пошло не так, попробуйте позже
        </p>
      ) : (
        <>
          <div className={styles.list__header}>
            <QuestionHeader isLoading={isFetching} />
          </div>
          <ul>
            <Questions isFetching={isFetching} questions={questions?.data} />
          </ul>
          <div className={styles.list__pages}>
            <QuestionPagination
              currentPage={currentPage}
              questions={questions}
              isLoading={isFetching}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      )}
    </section>
  );
};

export default QuestionList;
