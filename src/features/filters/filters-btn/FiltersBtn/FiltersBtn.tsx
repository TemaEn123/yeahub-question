import { closeIcon, filtersIcon } from "@/shared/assets";
import styles from "./styles.module.scss";
import { useFilters } from "../../utils/hooks/useFilters";

const FiltersBtn = () => {
  const { isShow, toggleShow } = useFilters();

  return (
    <div className={`${styles.btn} ${isShow && styles.btn_show}`}>
      <button onClick={toggleShow}>
        {isShow ? (
          <img src={closeIcon} alt="close filters" />
        ) : (
          <img src={filtersIcon} alt="show filters" />
        )}
      </button>
    </div>
  );
};

export default FiltersBtn;
