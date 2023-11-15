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
    <div className="navbar max-w-screen bg-base-100 absolute z-10 top-0 text-white ">
      <div className="flex justify-between items-center ">
        <a className="btn btn-ghost text-xl">Pinch of yum </a>
        <NavLink
          to="/"
          className="text-1xl min-w-max font-regular text-white  pt-3px pb-3px"
        >
          HOME
        </NavLink>
        {user ? (
          <>
            <NavLink
              to="/myProfile"
              className="text-1xl min-w-max font-regular text-white  pt-3px pb-3px"
            >
              MY PROFILE
            </NavLink>
            <NavLink
              to="/myRecipes"
              className="text-1xl min-w-max font-regular text-white  pt-3px pb-3px"
            >
              MY Recipes
            </NavLink>
            <Link
              to="/"
              onClick={handleLogout}
              className="text-1xl min-w-max font-regular text-white  pt-3px pb-3px"
            >
              LOGOUT
            </Link>
          </>
        ) : (
          <>
            <NavLink
              to="/register"
              className="text-1xl min-w-max font-regular text-white  pt-3px pb-3px"
            >
              REGISTER
            </NavLink>
            <NavLink
              to="/login"
              className="text-1xl min-w-max font-regular text-white  pt-3px pb-3px"
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
