import { BrowserRouter, Route, Routes } from "react-router";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/main";
import { QuestionPage } from "@/pages/question";
import { Suspense } from "react";
import Loading from "@/shared/ui/Loading/Loading";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <MainPage />
              </Suspense>
            }
          />
          <Route
            element={
              <Suspense fallback={<Loading />}>
                <QuestionPage />
              </Suspense>
            }
            path=":qid"
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
