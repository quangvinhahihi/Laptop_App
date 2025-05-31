import React from "react";
import { NavLink } from "react-router-dom";
import { Popover } from "antd";

const Navbar = () => {
    return(
        <div className="flex justify-between px-4 bg-[#219ebc] py-2">
      <div className="flex">
        <NavLink to="/" className="w-12 h-12 rounded-[50%] cursor-pointer">
          <img src="" alt="" />
        </NavLink>
        <div className="flex justify-start gap-4 ml-12 mt-[10px]">
          <NavLink to="/">
            <p className="font-bold text-white hover:text-emerald-200">Trang chủ</p>
          </NavLink>
          <NavLink to="/contact">
            <p className="font-bold text-white hover:text-emerald-200">Liên hệ</p>
          </NavLink>
        </div>
      </div>
      <div className="w-12 h-12 rounded-[50%] ">
        <img src="" alt="" />
      </div>
    </div>
    )
}
export default Navbar