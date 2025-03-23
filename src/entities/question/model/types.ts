import { ISpecialization } from "@/shared/interfaces/interfaces";

export interface IQuestion {
  id: number;
  questionSpecializations: ISpecialization[];
  complexity: number;
  rate: number;
  title: string;
  shortAnswer: string;
}

export interface IQuestionApiResponse {
  data: IQuestion[];
  limit: number;
  page: number;
  total: number;
}
