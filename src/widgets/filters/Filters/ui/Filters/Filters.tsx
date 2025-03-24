import { FiltersBlock, FiltersBtn, FiltersSearch } from "@/features/filters";
import styles from "./styles.module.scss";
import {
  useGetSkillsQuery,
  useGetSpecsQuery,
} from "@/features/filters/api/filtersApi";
import { difficult, rating } from "@/shared/consts";
import FiltersLoading from "../FiltersLoading/FiltersLoading";
import { useMemo } from "react";
import { useFilters } from "@/features/filters/utils/hooks/useFilters";

const Filters = () => {
  const { data: specs, isLoading, error } = useGetSpecsQuery(null);
  const memoSpecs = useMemo(() => specs?.data, [specs?.data]);

  const {
    data: skills,
    isLoading: isLoadingSkills,
    error: errorSkills,
  } = useGetSkillsQuery(null);
  const memoSkills = useMemo(() => skills?.data, [skills?.data]);

  const { isShow } = useFilters();

  const renderContent = () => {
    if (isLoading || isLoadingSkills)
      return (
        <aside className={`${styles.filters} ${isShow && styles.filters_show}`}>
          <FiltersLoading />
        </aside>
      );

    if (errorSkills || error) return null;

    return (
      <aside className={`${styles.filters} ${isShow && styles.filters_show}`}>
        <FiltersBtn />
        <FiltersSearch />
        <FiltersBlock items={memoSpecs} title="Специализация" type="common" />
        <FiltersBlock items={memoSkills} title="Навыки" type="common" />
        <FiltersBlock items={difficult} title="Сложность" type="common" />
        <FiltersBlock items={rating} title="Рейтинг" type="common" />
      </aside>
    );
  };

  return renderContent();
};

export default Filters;
