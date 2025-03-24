import { PAGE_LIMIT } from "@/shared/consts";

export const getTotalPages = function (total: number | undefined) {
  if (!total) return 0;

  return Math.ceil(total / Number(PAGE_LIMIT));
};
