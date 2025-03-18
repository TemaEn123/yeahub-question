export interface ISpecialization {
  id: number;
  title: string;
  description: string;
}

export type PointLabel = "Сложность" | "Рейтинг";

export type UsePaginationReturn = [
  () => void,
  () => void,
  (page: number) => void,
  () => (string | number)[],
  number
];
