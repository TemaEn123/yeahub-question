import "@/shared/styles/index.scss";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "./appStore";
import { FiltersProvider } from "./providers/FiltersProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <FiltersProvider>
      <AppRouter />
    </FiltersProvider>
  </Provider>
);
