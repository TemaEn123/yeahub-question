import { Header } from "@/widgets/header";
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
