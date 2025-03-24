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
  const renderContent = () => {
    if (isFetching)
      return (
        <Skeleton
          count={12}
          css={{
            height: 25,
            margin: "24px 0",
            borderBottom: "1px solid #e8e8e8",
          }}
        />
      );

    if (!questions?.length)
      return <Warning text="По вашему запросу ничего не найдено" />;

    return questions?.map((question) => (
      <QuestionAccordion key={question.id} question={question} />
    ));
  };

  return renderContent();
});

export default Questions;
