import { memo } from "react";
import styles from "./styles.module.scss";
import { PointLabel } from "@/shared/interfaces/interfaces";

interface Props {
  label: PointLabel;
  value: number;
}

const Point = memo(({ label, value }: Props) => {
  return (
    <div className={styles.point}>
      <p className={styles.point__text}>{label}</p>
      <p className={styles.point__value}>{value}</p>
    </div>
  );
});

export default Point;
