import { useAppSelector } from "@/app/appStore";
import { selectSpecTitle } from "@/features/filters/model/filtersSlice";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";

interface Props {
  isLoading: boolean;
}

const QuestionHeader = ({ isLoading }: Props) => {
  const title = useAppSelector(selectSpecTitle);

  return (
    <>
      {isLoading ? (
        <Skeleton css={{ width: 300, height: 30 }} count={1} />
      ) : (
        <h1>Вопросы {title}</h1>
      )}
    </>
  );
};

export default QuestionHeader;
