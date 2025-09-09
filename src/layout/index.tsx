import React from "react";
import Navbar from "../components/navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer";

const Layout = () => {
  const location = useLocation();
  const hideInterface = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!hideInterface && <Navbar />}
      <div className="md:px-5 lg:px-12 xl:px-32 px-2">
        <Outlet />
      </div>
      {!hideInterface && <Footer />}
    </div>
  );
};

export default Layout;
