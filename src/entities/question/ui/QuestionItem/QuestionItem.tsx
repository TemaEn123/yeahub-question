import styles from "./styles.module.scss";
import Point from "@/shared/ui/Point/Point";
import { IQuestion } from "../../model/types";
import { Link } from "react-router";
import { bigArrowIcon } from "@/shared/assets";
import { memo } from "react";

interface Props {
  question: IQuestion;
}

const QuestionItem = memo(({ question }: Props) => {
  return (
    <article className={styles.question}>
      <div className={styles.question__points}>
        <Point label="Рейтинг" value={question.rate} />
        <Point label="Сложность" value={question.complexity} />
      </div>
      <div
        className={styles.question__content}
        dangerouslySetInnerHTML={{ __html: question.shortAnswer }}
      ></div>
      <div className={styles.question__link}>
        <Link to={`${question.id}`}>
          Подробнее <img src={bigArrowIcon} alt="arrow" />
        </Link>
      </div>
    </article>
  );
});

export default QuestionItem;
