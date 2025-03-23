import { useAppDispatch } from "@/app/appStore";
import {
  changeFilters,
  changeSpecTitle,
} from "@/features/filters/model/filtersSlice";
import { ISpecialization } from "@/features/filters/model/types";
import { DEFAULT_SPEC } from "@/shared/consts";
import Button from "@/shared/ui/Button/Button";
import { useEffect, useRef, useState } from "react";
import styles from "../FiltersBlock/styles.module.scss";
import { useSearchParams } from "react-router";

interface Props {
  items: ISpecialization[] | undefined;
}

const FiltersSpecBlock = ({ items }: Props) => {
  const [searchParams] = useSearchParams();

  const [activeBtn, setActiveBtn] = useState<string>(
    searchParams.get("specialization") || DEFAULT_SPEC
  );
  const [show, setShow] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const title = useRef("");

  useEffect(() => {
    if (title.current) {
      dispatch(changeSpecTitle(title.current));
    }
  }, []);

  const handleSpecBtnClick = (value: ISpecialization | string): void => {
    if (typeof value === "string") throw new Error("используй правильный тип");
    setActiveBtn(String(value.id));
    dispatch(changeFilters(["specialization", String(value.id)]));
    dispatch(changeSpecTitle(value.title));
  };

  const handleShowClick = (): void => {
    setShow((prev) => !prev);
  };

  const specs = show ? items : items?.slice(0, 5);

  return (
    <>
      <div className={styles.block__btns}>
        {specs?.map((btn, i) => {
          const active = activeBtn === String(btn.id);

          if (active) {
            title.current = btn.title;
          }

          return (
            <Button
              handleClick={handleSpecBtnClick}
              value={btn}
              active={active}
              label={btn.title}
              key={i}
            />
          );
        })}
      </div>
      <button className={styles.block__show} onClick={handleShowClick}>
        {!show ? "Посмотреть все" : "Скрыть"}
      </button>
    </>
  );
};

export default FiltersSpecBlock;
