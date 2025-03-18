import { ISpecialization } from "@/shared/interfaces/interfaces";

export interface IQuestion {
  id: number;
  specialization: ISpecialization;
  complexity: number;
  rate: number;
  imageSrc: string | null;
  title: string;
  shortAnswer: string;
}

export interface IQuestionApiResponse {
  data: IQuestion[];
  limit: number;
  page: number;
  total: number;
}
