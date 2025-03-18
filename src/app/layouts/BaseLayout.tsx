import Header from "@/widgets/Header/ui/Header";
import { Outlet } from "react-router";

const BaseLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default BaseLayout;
