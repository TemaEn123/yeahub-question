import { Filters } from "@/widgets/Filters";
import styles from "./styles.module.scss";
import { QuestionList } from "@/widgets/QuestionList";

const MainPage = () => {
  return (
    <div className={styles.page}>
      <QuestionList />
      <Filters />
    </div>
  );
};

export default MainPage;
