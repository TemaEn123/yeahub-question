import { Outlet } from "react-router";

const BaseLayout = () => {
  return (
    <div className="wrapper">
      <header>header</header>
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default BaseLayout;
