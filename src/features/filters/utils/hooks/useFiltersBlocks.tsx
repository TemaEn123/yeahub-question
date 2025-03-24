import { FiltersBlockTitle, FiltersItems } from "../../model/types";
import FiltersSpecBlock from "../../filters-block/ui/FiltersSpecsBlock/FiltersSpecBlock";
import FiltersSkillsBlock from "../../filters-block/ui/FiltersSkillsBlock/FiltersSkillsBlock";
import FiltersDiffBlock from "../../filters-block/ui/FiltersDiffBlock/FiltersDiffBlock";
import FiltersRatingBlock from "../../filters-block/ui/FiltersRatingBlock/FiltersRatingBlock";
import { JSX, useMemo } from "react";
import FiltersLevelBlock from "../../filters-block/ui/FiltersLevelBlock/FiltersLevelBlock";
import FiltersKeyBlock from "../../filters-block/ui/FiltersKeyBlock/FiltersKeyBlock";
import { ISkill, ISpecialization } from "@/shared/interfaces/interfaces";

const useFiltersBlocks = (
  title: FiltersBlockTitle,
  items: FiltersItems,
  type: "common" | "current"
): JSX.Element => {
  return useMemo(() => {
    switch (title) {
      case "Специализация":
        return <FiltersSpecBlock items={items as ISpecialization[]} />;
      case "Навыки":
        return <FiltersSkillsBlock items={items as ISkill[]} type={type} />;
      case "Сложность":
        return <FiltersDiffBlock items={items as string[]} />;
      case "Рейтинг":
        return <FiltersRatingBlock items={items as string[]} />;
      case "Уровень":
        return <FiltersLevelBlock items={items as [number, number]} />;
      case "Ключевые слова":
        return <FiltersKeyBlock items={items as string[]} />;
    }
  }, [title, items]);
};

export default useFiltersBlocks;
