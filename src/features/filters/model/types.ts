export interface IFilters {
  title: string;
  limit: string;
  specialization: string;
  skills: string;
  complexity: string;
  rate: string;
}

export interface IFiltersInitState {
  filters: IFilters;
  specTitle: string;
}

export interface ISpecsReq {
  data: ISpecialization[];
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

export interface ISkillsReq {
  data: ISkill[];
}

export type FiltersBlockTitle =
  | "Специализация"
  | "Навыки"
  | "Сложность"
  | "Рейтинг";

export type FiltersItems = ISpecialization[] | ISkill[] | string[] | undefined;
