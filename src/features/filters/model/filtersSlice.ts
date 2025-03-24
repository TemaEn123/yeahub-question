import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/appStore";
import { DEFAULT_SPEC, PAGE_LIMIT } from "@/shared/consts";
import { IFilters, IFiltersInitState } from "./types";

const initialState: IFiltersInitState = {
  filters: {
    limit: PAGE_LIMIT,
    specialization: DEFAULT_SPEC,
    title: "",
    complexity: "",
    rate: "",
    skills: "",
    keywords: "",
  },
  specTitle: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilters: (state, action: PayloadAction<[keyof IFilters, string]>) => {
      state.filters[action.payload[0]] = action.payload[1];
    },
    changeSpecTitle: (state, action: PayloadAction<string>) => {
      state.specTitle = action.payload;
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const { changeFilters, changeSpecTitle, clearFilters } =
  filtersSlice.actions;

export const selectFilters = (state: RootState) => state.filters.filters;
export const selectSpecTitle = (state: RootState) => state.filters.specTitle;

export default filtersSlice.reducer;
