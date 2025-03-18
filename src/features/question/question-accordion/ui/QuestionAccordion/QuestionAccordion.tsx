import styles from "./styles.module.scss";
import { QuestionItem } from "@/entities/question";
import { IQuestion } from "@/entities/question/model/types";
import { miniArrowIcon } from "@/shared/assets";
import { useState } from "react";

interface Props {
  question: IQuestion;
}

const QuestionAccordion = ({ question }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <li className={styles.accordion}>
      <div
        className={`${styles.accordion__event} ${
          isOpen && styles.accordion__event_open
        }`}
      >
        <button onClick={handleClick}>
          <p>{question.title}</p>
          <img src={miniArrowIcon} alt="arrow" />
        </button>
      </div>
      {isOpen ? (
        <div className={styles.accordion__question}>
          <QuestionItem question={question} />
        </div>
      ) : null}
    </li>
  );
};

export default QuestionAccordion;
