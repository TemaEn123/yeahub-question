import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISkillsReq, ISpecsReq } from "../model/types";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export const filtersApi = createApi({
  reducerPath: "filtersApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: (builder) => ({
    getSpecs: builder.query<ISpecsReq, null>({
      query: () => "specializations/?limit=20",
    }),
    getSkills: builder.query<ISkillsReq, null>({
      query: () => "skills/?limit=45",
    }),
  }),
});

export const { useGetSpecsQuery, useGetSkillsQuery } = filtersApi;
