import styles from "./styles.module.scss";

interface Props {
  text: string;
}

const Warning = ({ text }: Props) => {
  return (
    <div className={styles.warning}>
      <p>{text}</p>
    </div>
  );
};

export default Warning;
