import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import styles from "./styles.module.scss";

const QuestionPageLoading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__left}>
        <Skeleton
          count={1}
          css={{
            height: 150,
            marginBottom: 24,
            borderRadius: 24,
          }}
        />
        <Skeleton
          count={1}
          css={{
            height: 150,
            marginBottom: 24,
            borderRadius: 24,
          }}
        />
        <Skeleton count={1} css={{ height: 500, borderRadius: 24 }} />
      </div>
      <div className={styles.loading__right}>
        <Skeleton count={1} css={{ height: 14, marginBottom: 8, width: 120 }} />
        <div>
          <Skeleton
            count={2}
            css={{
              height: 40,
              margin: "0 8px 8px 0",
              width: "40%",
              borderRadius: 10,
            }}
          />
        </div>
        <Skeleton
          count={1}
          css={{ height: 14, margin: "24px 0 8px 0", width: 120 }}
        />
        <div>
          <Skeleton
            count={2}
            css={{
              height: 40,
              margin: "0 8px 8px 0",
              width: "40%",
              borderRadius: 10,
            }}
          />
        </div>
        <Skeleton
          count={1}
          css={{ height: 14, margin: "24px 0 8px 0", width: 120 }}
        />
        <div>
          <Skeleton
            count={2}
            css={{
              height: 14,
              marginRight: 8,
              width: "40%",
              borderRadius: 10,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionPageLoading;
