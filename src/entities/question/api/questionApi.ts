import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuestion, IQuestionApiResponse } from "../model/types";
import { IFiltersForReq } from "@/shared/interfaces/interfaces";
import { removeEmptyProperties } from "@/shared/utils/helpers/removeEmptyProperties";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}questions/public-questions`,
  }),
  endpoints: (builder) => ({
    getQuestions: builder.query<IQuestionApiResponse, IFiltersForReq>({
      query: (filters) => {
        const correctFilters = removeEmptyProperties(filters);

        return {
          url: "",
          params: { ...correctFilters },
        };
      },
    }),
    getQuestionById: builder.query<IQuestion, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
