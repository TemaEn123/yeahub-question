import useFiltersHandler from "@/features/filters/utils/hooks/useFiltersHandler";
import Button from "@/shared/ui/Button/Button";
import { memo, useMemo, useState } from "react";
import styles from "../FiltersBlock/styles.module.scss";
import { ISkill } from "@/shared/interfaces/interfaces";

interface Props {
  items: ISkill[] | undefined;
  type: "common" | "current";
}

const FiltersSkillsBlock = memo(({ items, type }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [activeBtns, handleFiltersBtnClick] = useFiltersHandler("skills", type);

  const handleShowClick = (): void => {
    setShow((prev) => !prev);
  };

  const skills = useMemo(
    () => (show ? items : items?.slice(0, 8)),
    [show, items]
  );

  const renderLook = () => {
    if (items!.length > 8)
      return (
        <button className={styles.block__show} onClick={handleShowClick}>
          {!show ? "Посмотреть все" : "Скрыть"}
        </button>
      );

    return null;
  };

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
      {renderLook()}
    </>
  );
});

export default FiltersSkillsBlock;
