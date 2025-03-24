import { IQuestion } from "@/entities/question/model/types";
import { QuestionAccordion } from "@/features/question/question-accordion";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import Warning from "@/shared/ui/Warning/Warning";
import { memo } from "react";

interface Props {
  isFetching: boolean;
  questions: IQuestion[] | undefined;
}

const Questions = memo(({ isFetching, questions }: Props) => {
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
        <Warning text="По вашему запросу ничего не найдено" />
      ) : (
        questions?.map((question) => (
          <QuestionAccordion key={question.id} question={question} />
        ))
      )}
    </>
  );
});

export default Questions;
