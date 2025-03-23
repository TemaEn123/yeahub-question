import styles from "./styles.module.scss";

interface Props {
  css: Record<string, number | string>;
  count: number;
}

const Skeleton = ({ count, css }: Props) => {
  return (
    <>
      {[...new Array(count)].map((_, i) => (
        <div key={i} style={css} className={styles.skeleton}></div>
      ))}
    </>
  );
};

export default Skeleton;
