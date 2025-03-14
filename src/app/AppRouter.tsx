import { BrowserRouter, Route, Routes } from "react-router";
import BaseLayout from "./layouts/BaseLayout";
import { MainPage } from "@/pages/main";
import { QuestionPage } from "@/pages/question";
import { NotFound } from "@/pages/notFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<MainPage />} />
          <Route element={<QuestionPage />} path=":qid" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
