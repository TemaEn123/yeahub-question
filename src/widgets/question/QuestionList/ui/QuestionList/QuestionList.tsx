import styles from "./styles.module.scss";
import { useAppSelector } from "@/app/appStore";
import { useGetQuestionsQuery } from "@/entities/question/api/questionApi";
import { useMemo, useState } from "react";
import { selectFilters } from "@/features/filters/model/filtersSlice";
import QuestionHeader from "../QuestionHeader/QuestionHeader";
import Questions from "../Questions/Questions";
import QuestionPagination from "../QuestionPagination/QuestionPagination";
import { useSearchParams } from "react-router";
import useQueryParams from "../../utils/hooks/useQueryParams";
import Warning from "@/shared/ui/Warning/Warning";
import { FiltersBtn } from "@/features/filters";

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

  const memoQuestions = useMemo(() => questions?.data, [questions?.data]);
  const memoQuestionsRes = useMemo(() => questions, [questions]);

  const renderContent = () => {
    if (error) return <Warning text="Что-то пошло не так, попробуйте позже" />;

    return (
      <>
        <div className={styles.list__header}>
          <QuestionHeader isLoading={isFetching} />
          <FiltersBtn />
        </div>
        <ul>
          <Questions isFetching={isFetching} questions={memoQuestions} />
        </ul>
        <div className={styles.list__pages}>
          <QuestionPagination
            currentPage={currentPage}
            questions={memoQuestionsRes}
            isLoading={isFetching}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </>
    );
  };

  return <section className={styles.list}>{renderContent()}</section>;
};

export default QuestionList;
