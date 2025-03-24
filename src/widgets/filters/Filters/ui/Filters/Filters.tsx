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

  if (error) {
    console.log(error);
  }

  if (errorSkills) {
    console.log(error);
  }

  return (
    <aside className={`${styles.filters} ${isShow && styles.filters_show}`}>
      {isLoading || isLoadingSkills ? (
        <FiltersLoading />
      ) : (
        <>
          <FiltersBtn />
          <FiltersSearch />
          {!error && (
            <FiltersBlock
              items={memoSpecs}
              title="Специализация"
              type="common"
            />
          )}
          {!errorSkills && (
            <FiltersBlock items={memoSkills} title="Навыки" type="common" />
          )}
          <FiltersBlock items={difficult} title="Сложность" type="common" />
          <FiltersBlock items={rating} title="Рейтинг" type="common" />
        </>
      )}
    </aside>
  );
};

export default Filters;
