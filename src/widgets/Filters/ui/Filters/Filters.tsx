import { FiltersBlock, FiltersSearch } from "@/features/filters";
import styles from "./styles.module.scss";
import {
  useGetSkillsQuery,
  useGetSpecsQuery,
} from "@/features/filters/api/filtersApi";
import { difficult, rating } from "@/shared/consts";
import FiltersLoading from "../FiltersLoading/FiltersLoading";
import { useMemo } from "react";

const Filters = () => {
  const { data: specs, isLoading, error } = useGetSpecsQuery(null);
  const memoSpecs = useMemo(() => specs?.data, [specs?.data]);

  const {
    data: skills,
    isLoading: isLoadingSkills,
    error: errorSkills,
  } = useGetSkillsQuery(null);
  const memoSkills = useMemo(() => skills?.data, [skills?.data]);

  if (error) {
    console.log(error);
  }

  if (errorSkills) {
    console.log(error);
  }

  return (
    <aside className={styles.filters}>
      {isLoading || isLoadingSkills ? (
        <FiltersLoading />
      ) : (
        <>
          <FiltersSearch />
          {!error && <FiltersBlock items={memoSpecs} title="Специализация" />}
          {!errorSkills && <FiltersBlock items={memoSkills} title="Навыки" />}
          <FiltersBlock items={difficult} title="Сложность" />
          <FiltersBlock items={rating} title="Рейтинг" />
        </>
      )}
    </aside>
  );
};

export default Filters;
