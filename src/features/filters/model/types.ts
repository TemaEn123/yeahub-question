import { ISkill, ISpecialization } from "@/shared/interfaces/interfaces";

export interface IFilters {
  title: string;
  limit: string;
  specialization: string;
  skills: string;
  complexity: string;
  rate: string;
  keywords: string;
}

export interface IFiltersInitState {
  filters: IFilters;
  specTitle: string;
}

export interface ISpecsReq {
  data: ISpecialization[];
}

export interface ISkillsReq {
  data: ISkill[];
}

export type FiltersBlockTitle =
  | "Специализация"
  | "Навыки"
  | "Сложность"
  | "Рейтинг"
  | "Уровень"
  | "Ключевые слова";

export type FiltersItems =
  | ISpecialization[]
  | ISkill[]
  | string[]
  | [number, number]
  | undefined;
