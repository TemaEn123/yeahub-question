import styles from "./styles.module.scss";
import { useParams } from "react-router";
import { useGetQuestionByIdQuery } from "@/entities/question/api/questionApi";
import { useMemo } from "react";
import { QuestionDetails } from "@/entities/question";
import { FiltersCurrQuestion } from "@/widgets/filters";
import QuestionPageLoading from "../QuestionPageLoading/QuestionPageLoading";
import Warning from "@/shared/ui/Warning/Warning";

const QuestionPage = () => {
  const params = useParams();

  const {
    data: question,
    isLoading,
    error,
  } = useGetQuestionByIdQuery(params.qid as string);

  const memoQuestion = useMemo(() => question, [question]);

  return (
    <div className={styles.page}>
      {isLoading ? (
        <QuestionPageLoading />
      ) : error ? (
        <Warning text="Что-то пошло не так, попробуйте позже" />
      ) : (
        <>
          <QuestionDetails question={memoQuestion} />
          <FiltersCurrQuestion question={memoQuestion} />
        </>
      )}
    </div>
  );
};

export default QuestionPage;
