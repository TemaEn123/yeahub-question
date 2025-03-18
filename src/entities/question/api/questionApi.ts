import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuestionApiResponse } from "../model/types";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const questionApi = createApi({
  reducerPath: "questionApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}questions/` }),
  endpoints: (builder) => ({
    getQuestions: builder.query<IQuestionApiResponse, number>({
      query: (page) =>
        `public-questions?limit=12&page=${page}&specialization=11`,
    }),
  }),
});

export const { useGetQuestionsQuery } = questionApi;
