import { ISkill } from "@/features/filters/model/types";
import useFiltersHandler from "@/features/filters/utils/hooks/useFiltersHandler";
import Button from "@/shared/ui/Button/Button";
import { memo, useMemo, useState } from "react";
import styles from "../FiltersBlock/styles.module.scss";

interface Props {
  items: ISkill[] | undefined;
}

const FiltersSkillsBlock = memo(({ items }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [activeBtns, handleFiltersBtnClick] = useFiltersHandler("skills");

  const handleShowClick = (): void => {
    setShow((prev) => !prev);
  };

  const skills = useMemo(
    () => (show ? items : items?.slice(0, 8)),
    [show, items]
  );

  return (
    <>
      <div>
        {skills?.map((btn, i) => {
          const active = activeBtns.includes(String(btn.id));

          return (
            <Button
              active={active}
              handleClick={handleFiltersBtnClick}
              value={String(btn.id)}
              key={i}
              label={btn.title}
              img={btn.imageSrc}
            />
          );
        })}
      </div>
      <button className={styles.block__show} onClick={handleShowClick}>
        {!show ? "Посмотреть все" : "Скрыть"}
      </button>
    </>
  );
});

export default FiltersSkillsBlock;
