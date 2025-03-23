import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuestionApiResponse } from "../model/types";
import { IFiltersForReq } from "@/shared/interfaces/interfaces";
import { removeEmptyProperties } from "@/shared/utils/helpers/removeEmptyProperties";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}questions/` }),
  endpoints: (builder) => ({
    getQuestions: builder.query<IQuestionApiResponse, IFiltersForReq>({
      query: (filters) => {
        const correctFilters = removeEmptyProperties(filters);

        return {
          url: "public-questions",
          params: { ...correctFilters },
        };
      },
    }),
  }),
});

export const { useGetQuestionsQuery } = questionApi;
