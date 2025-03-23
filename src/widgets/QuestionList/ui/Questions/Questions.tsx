import { IQuestion } from "@/entities/question/model/types";
import { QuestionAccordion } from "@/features/question/question-accordion";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import styles from "../QuestionList/styles.module.scss";

interface Props {
  isFetching: boolean;
  questions: IQuestion[] | undefined;
}

const Questions = ({ isFetching, questions }: Props) => {
  return (
    <>
      {isFetching ? (
        <Skeleton
          count={12}
          css={{
            height: 25,
            margin: "24px 0",
            borderBottom: "1px solid #e8e8e8",
          }}
        />
      ) : !questions?.length ? (
        <div className={styles.list__warn}>
          По вашему запросу ничего не найдено
        </div>
      ) : (
        questions?.map((question) => (
          <QuestionAccordion key={question.id} question={question} />
        ))
      )}
    </>
  );
};

export default Questions;
