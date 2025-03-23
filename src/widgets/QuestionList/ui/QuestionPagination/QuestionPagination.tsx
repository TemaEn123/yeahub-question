import { IQuestionApiResponse } from "@/entities/question/model/types";
import { Pagination } from "@/features/pagination";
import { getTotalPages } from "@/features/pagination/utils/helpers/getTotalPages";
import usePagination from "@/features/pagination/utils/hooks/usePagination";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import { Dispatch } from "react";

interface Props {
  currentPage: number;
  questions: IQuestionApiResponse | undefined;
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
}

const QuestionPagination = ({
  currentPage,
  questions,
  setCurrentPage,
  isLoading,
}: Props) => {
  const totalPages = getTotalPages(questions?.total);

  const [goToPreviousPage, goToNextPage, goToPage, getPageRange] =
    usePagination(totalPages, currentPage, setCurrentPage);

  return (
    <>
      {isLoading ? (
        <Skeleton count={10} css={{ width: 20, height: 20, marginRight: 10 }} />
      ) : !questions?.data?.length ? null : (
        <Pagination
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
          goToPage={goToPage}
          getPageRange={getPageRange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
};

export default QuestionPagination;
