import useFiltersHandler from "@/features/filters/utils/hooks/useFiltersHandler";
import Button from "@/shared/ui/Button/Button";
import { memo } from "react";

interface Props {
  items: string[];
}

const FiltersRatingBlock = memo(({ items }: Props) => {
  const [activeBtns, handleFiltersBtnClick] = useFiltersHandler("rate");

  return (
    <div>
      {items?.map((btn, i) => {
        const active = activeBtns.includes(btn);

        return (
          <Button
            active={active}
            handleClick={handleFiltersBtnClick}
            value={btn}
            key={i}
            label={btn}
          />
        );
      })}
    </div>
  );
});

export default FiltersRatingBlock;
