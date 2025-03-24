import { useAppDispatch } from "@/app/appStore";
import styles from "../FiltersBlock/styles.module.scss";
import {
  changeFilters,
  clearFilters,
} from "@/features/filters/model/filtersSlice";
import { useNavigate } from "react-router";

interface Props {
  items: string[];
}

const FiltersKeyBlock = ({ items }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (value: string) => {
    dispatch(clearFilters());
    dispatch(changeFilters(["keywords", value]));
    navigate(`/?page=1&specialization=11&keywords=${value}`);
  };

  return (
    <div className={styles.block__keys}>
      {items.map((key) => (
        <button onClick={() => handleClick(key)} key={key}>
          #{key}
        </button>
      ))}
    </div>
  );
};

export default FiltersKeyBlock;
