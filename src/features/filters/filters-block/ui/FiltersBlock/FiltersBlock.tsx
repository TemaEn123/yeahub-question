import useFiltersBlocks from "@/features/filters/utils/hooks/useFiltersBlocks";
import styles from "./styles.module.scss";
import {
  FiltersBlockTitle,
  FiltersItems,
} from "@/features/filters/model/types";
import { memo } from "react";

interface Props {
  title: FiltersBlockTitle;
  items: FiltersItems;
  type: "common" | "current";
}

const FiltersBlock = memo(({ title, items, type }: Props) => {
  const filtersBlockComponent = useFiltersBlocks(title, items, type);

  return (
    <div className={styles.block}>
      <p className={styles.block__title}>{title}</p>
      {filtersBlockComponent}
    </div>
  );
});

export default FiltersBlock;
