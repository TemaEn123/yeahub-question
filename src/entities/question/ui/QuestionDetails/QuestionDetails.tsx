import { memo, useState } from "react";
import styles from "./styles.module.scss";
import { IQuestion } from "../../model/types";
import { miniArrowIcon } from "@/shared/assets";

interface Props {
  question: IQuestion | undefined;
}

const QuestionDetails = memo(({ question }: Props) => {
  const [show, setShow] = useState<boolean>(false);

  const handleShowClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <section className={styles.question}>
      <div className={styles.question__block}>
        <h1 className={styles.question__title}>{question!.title}</h1>
        <p className={styles.question__text}>{question!.description}</p>
      </div>
      <div className={styles.question__block}>
        <p className={styles.question__subtitle}>Краткий ответ</p>
        <div dangerouslySetInnerHTML={{ __html: question!.shortAnswer }}></div>
      </div>
      <div
        className={`${styles.question__block} ${
          show && styles.question__block_none
        }`}
      >
        <p className={styles.question__subtitle}>Развёрнутый ответ</p>
        <div dangerouslySetInnerHTML={{ __html: question!.longAnswer }}></div>
        <div
          className={`${styles.question__more} ${
            show && styles.question__more_show
          }`}
        >
          <button onClick={handleShowClick}>
            {show ? "Скрыть" : "Развернуть"}
            <img src={miniArrowIcon} alt="arrow" />
          </button>
        </div>
      </div>
    </section>
  );
});

export default QuestionDetails;
