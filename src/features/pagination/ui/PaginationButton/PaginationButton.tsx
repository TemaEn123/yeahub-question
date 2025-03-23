import styles from "./styles.module.scss";
import { bigArrowIcon } from "@/shared/assets";
import { PaginationBtnDir } from "../../model/types";
import { memo } from "react";

interface Props {
  dir: PaginationBtnDir;
  handleClick: () => void;
  disabled: boolean;
}

const PaginationButton = memo(({ dir, handleClick, disabled }: Props) => {
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
});

export default PaginationButton;
