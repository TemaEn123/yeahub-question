export type PointLabel = "Сложность" | "Рейтинг";

export interface IFiltersForReq {
  page: string;
  title: string;
  limit: string;
  specialization: string;
  skills: string;
  complexity: string;
  rate: string;
}
