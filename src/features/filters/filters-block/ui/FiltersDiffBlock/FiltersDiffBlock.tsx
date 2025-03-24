import { expandRange } from "@/features/filters/utils/helpers/expandRange";
import useFiltersHandler from "@/features/filters/utils/hooks/useFiltersHandler";
import Button from "@/shared/ui/Button/Button";
import { memo } from "react";

interface Props {
  items: string[] | undefined;
}

const FiltersDiffBlock = memo(({ items }: Props) => {
  const [activeBtns, handleFiltersBtnClick] = useFiltersHandler("complexity");

  return (
    <div>
      {items?.map((btn, i) => {
        const value = expandRange(btn);

        const active = activeBtns.includes(value);

        return (
          <Button
            active={active}
            handleClick={handleFiltersBtnClick}
            value={value}
            key={i}
            label={btn}
          />
        );
      })}
    </div>
  );
});

export default FiltersDiffBlock;
