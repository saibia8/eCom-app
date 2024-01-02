import { Outlet } from "react-router-dom";
import FooterNav from "../FooterNav";
import Header from "../Header";

function Layout() {
  return (
    <>
      <Header />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
      <FooterNav />
    </>
  );
}

export default Layout;
