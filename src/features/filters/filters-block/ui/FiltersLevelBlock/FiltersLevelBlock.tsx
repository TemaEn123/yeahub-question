import Point from "@/shared/ui/Point/Point";
import styles from "../FiltersBlock/styles.module.scss";

interface Props {
  items: [number, number];
}

const FiltersLevelBlock = ({ items }: Props) => {
  return (
    <div className={styles.block__level}>
      <Point label="Сложность" value={items[0]} />
      <Point label="Рейтинг" value={items[1]} />
    </div>
  );
};

export default FiltersLevelBlock;
