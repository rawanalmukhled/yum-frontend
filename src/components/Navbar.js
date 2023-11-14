// src/components/HomePage.js
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import { logout } from "../api/auth";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(false);
    logout(); //flex-none menu menu-horizontal px-1       <div className="navbar bg-base-200 flex flex-row">
  };
  return (
    <div className="flex-none menu menu-horizontal px-1">
      <div className="w-full flex justify-end gap-6">
        <NavLink
          to="/"
          className="text-1xl min-w-max font-regular text-white border border-[#573312] pt-3px pb-3px"
        >
          HOME
        </NavLink>

        <NavLink
          to="/chefs"
          className="text-1xl min-w-max font-regular text-white border border-[#573312] pt-3px pb-3px"
        >
          Chefs
        </NavLink>
        <div className="text-white font-bold">|</div>

        {user ? (
          <>
            <NavLink
              to="/myProfile"
              className="text-1xl min-w-max font-regular text-white border border-[#573312] pt-3px pb-3px"
            >
              MY PROFILE
            </NavLink>
            <NavLink
              to="/myRecipes"
              className="text-1xl min-w-max font-regular text-white border border-[#573312] pt-3px pb-3px"
            >
              MY Recipes
            </NavLink>
            <Link
              to="/"
              onClick={handleLogout}
              className="text-1xl min-w-max font-regular text-white border border-[#573312] pt-3px pb-3px"
            >
              LOGOUT
            </Link>
          </>
        ) : (
          <>
            <NavLink
              to="/register"
              className="text-1xl min-w-max font-regular text-white border border-[#573312] pt-3px pb-3px"
            >
              REGISTER
            </NavLink>
            <NavLink
              to="/login"
              className="text-1xl min-w-max font-regular text-white border border-[#573312] pt-3px pb-3px"
            >
              LOGIN
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
        <a>Link</a>
      </li>
    </ul>
  </div>
</div>;
