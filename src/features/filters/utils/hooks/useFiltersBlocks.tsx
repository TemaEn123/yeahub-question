import {
  FiltersBlockTitle,
  FiltersItems,
  ISkill,
  ISpecialization,
} from "../../model/types";
import FiltersSpecBlock from "../../fitlers-block/ui/FiltersSpecsBlock/FiltersSpecBlock";
import FiltersSkillsBlock from "../../fitlers-block/ui/FiltersSkillsBlock/FiltersSkillsBlock";
import FiltersDiffBlock from "../../fitlers-block/ui/FiltersDiffBlock/FiltersDiffBlock";
import FiltersRatingBlock from "../../fitlers-block/ui/FiltersRatingBlock/FiltersRatingBlock";
import { JSX, useMemo } from "react";

const useFiltersBlocks = (
  title: FiltersBlockTitle,
  items: FiltersItems
): JSX.Element => {
  return useMemo(() => {
    switch (title) {
      case "Специализация":
        return <FiltersSpecBlock items={items as ISpecialization[]} />;
      case "Навыки":
        return <FiltersSkillsBlock items={items as ISkill[]} />;
      case "Сложность":
        return <FiltersDiffBlock items={items as string[]} />;
      case "Рейтинг":
        return <FiltersRatingBlock items={items as string[]} />;
    }
  }, [title, items]);
};

export default useFiltersBlocks;
