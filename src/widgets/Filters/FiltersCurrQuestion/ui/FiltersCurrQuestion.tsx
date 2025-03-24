import { IQuestion } from "@/entities/question/model/types";
import styles from "./styles.module.scss";
import { FiltersBlock } from "@/features/filters";
import { useMemo } from "react";

interface Props {
  question: IQuestion | undefined;
}

const FiltersCurrQuestion = ({ question }: Props) => {
  const skills = useMemo(() => question?.questionSkills, [question]);
  const level = useMemo(
    () => [question?.complexity, question?.rate],
    [question]
  );

  return (
    <aside className={styles.filters}>
      <FiltersBlock
        items={level as [number, number]}
        title="Уровень"
        type="current"
      />
      <FiltersBlock items={skills} title="Навыки" type="current" />
      <FiltersBlock
        items={question?.keywords}
        title="Ключевые слова"
        type="current"
      />
    </aside>
  );
};

export default FiltersCurrQuestion;
