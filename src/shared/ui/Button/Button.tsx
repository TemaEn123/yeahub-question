import { ISpecialization } from "@/features/filters/model/types";
import styles from "./styles.module.scss";

interface Props {
  label: string;
  img?: string;
  active: boolean;
  handleClick: (value: string | ISpecialization) => void;
  value: string | ISpecialization;
}

const Button = ({ label, img, active, handleClick, value }: Props) => {
  return (
    <button
      onClick={() => handleClick(value)}
      className={`${styles.btn} ${active && styles.btn_active}`}
    >
      {img && <img src={img} alt="point" />} {label}
    </button>
  );
};

export default Button;
