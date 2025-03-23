import useFiltersBlocks from "@/features/filters/utils/hooks/useFiltersBlocks";
import styles from "./styles.module.scss";
import {
  FiltersBlockTitle,
  FiltersItems,
} from "@/features/filters/model/types";

interface Props {
  title: FiltersBlockTitle;
  items: FiltersItems;
}

const FiltersBlock = ({ title, items }: Props) => {
  const filtersBlockComponent = useFiltersBlocks(title, items);

  return (
    <div className={styles.block}>
      <p className={styles.block__title}>{title}</p>
      {filtersBlockComponent}
    </div>
  );
};

export default FiltersBlock;
