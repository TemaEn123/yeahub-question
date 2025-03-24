import { Filters } from "@/widgets/filters";
import styles from "./styles.module.scss";
import { QuestionList } from "@/widgets/question";

const MainPage = () => {
  return (
    <div className={styles.page}>
      <QuestionList />
      <Filters />
    </div>
  );
};

export default MainPage;
