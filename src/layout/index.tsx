import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

const Layout = () => {
  return(
    <div>
      <Navbar />
      <div className="md:px-5 lg:px-12 xl:px-32 px-2">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout;