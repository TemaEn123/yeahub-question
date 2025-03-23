export type PaginationBtnDir = "left" | "right";

export type UsePaginationReturn = [
  () => void,
  () => void,
  (page: number) => void,
  () => (string | number)[],
  number
];
