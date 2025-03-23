import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import styles from "./styles.module.scss";

const FiltersLoading = () => {
  return (
    <div className={styles.loading}>
      <Skeleton
        count={1}
        css={{ height: 45, borderRadius: 10, marginBottom: 24 }}
      />
      <Skeleton count={1} css={{ height: 14, marginBottom: 8, width: 120 }} />
      <Skeleton
        count={5}
        css={{ height: 40, marginBottom: 8, width: "70%", borderRadius: 10 }}
      />
      <Skeleton
        count={1}
        css={{ height: 14, margin: "24px 0 8px 0", width: 120 }}
      />
      <div>
        <Skeleton
          count={8}
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
          count={5}
          css={{
            height: 40,
            marginRight: 8,
            width: "15%",
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
          count={5}
          css={{
            height: 40,
            marginRight: 8,
            width: "12%",
            borderRadius: 10,
          }}
        />
      </div>
    </div>
  );
};

export default FiltersLoading;
