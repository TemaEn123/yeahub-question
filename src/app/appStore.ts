import { questionApi } from "@/entities/question/api/questionApi";
import { filtersApi } from "@/features/filters/api/filtersApi";
import filterReducer from "@/features/filters/model/filtersSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    [questionApi.reducerPath]: questionApi.reducer,
    [filtersApi.reducerPath]: filtersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      questionApi.middleware,
      filtersApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
