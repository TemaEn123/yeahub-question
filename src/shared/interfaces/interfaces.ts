export type PointLabel = "Сложность" | "Рейтинг";

export interface IFiltersForReq {
  page: string;
  title: string;
  limit: string;
  specialization: string;
  skills: string;
  complexity: string;
  rate: string;
  keywords: string;
}

export interface ISpecialization {
  id: number;
  title: string;
}

export interface ISkill {
  id: number;
  title: string;
  imageSrc: string;
}
