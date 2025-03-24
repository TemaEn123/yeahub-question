import { ISpecialization } from "@/shared/interfaces/interfaces";
import styles from "./styles.module.scss";
import { memo } from "react";

interface Props {
  label: string;
  img?: string;
  active: boolean;
  handleClick: (value: string | ISpecialization) => void;
  value: string | ISpecialization;
}

const Button = memo(({ label, img, active, handleClick, value }: Props) => {
  return (
    <button
      onClick={() => handleClick(value)}
      className={`${styles.btn} ${active && styles.btn_active}`}
    >
      {img && <img src={img} alt="point" />} {label}
    </button>
  );
});

export default Button;
