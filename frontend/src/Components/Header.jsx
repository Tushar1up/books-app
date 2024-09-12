import React from "react";
import { SiHomepage } from "react-icons/si";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex h-12 items-center justify-between bg-slate-400 px-4 text-white">
      {/* Icon at the start */}
      <NavLink to="/">
        <SiHomepage className="hover:cursor-pointer" />
      </NavLink>

      {/* Other content at the end */}
      <div className="flex space-x-4">
        <NavLink to="/addproduct">
          <h1 className="hover:cursor-pointer">BOOKMARKS</h1>
        </NavLink>
        <NavLink to="/about">
          <h1 className="hover:cursor-pointer">ABOUT US</h1>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
