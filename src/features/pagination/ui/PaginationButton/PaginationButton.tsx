import styles from "./styles.module.scss";
import { bigArrowIcon } from "@/shared/assets";
import { PaginationBtnDir } from "../../model/types";

interface Props {
  dir: PaginationBtnDir;
  handleClick: () => void;
  disabled: boolean;
}

const PaginationButton = ({ dir, handleClick, disabled }: Props) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`${styles.paginationBtn} ${
        dir === "left" && styles.paginationBtn_left
      }`}
    >
      <img src={bigArrowIcon} alt={`${dir} arrow`} />
    </button>
  );
};

export default PaginationButton;
