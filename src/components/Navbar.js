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
    <div className="navbar w-full bg-base-100  top-0  mb-2">
      <div className="flex w-full items-center justify-start ">
        {/* <NavLink
          to="/"
          className="text-1xl min-w-max font-regular text-white  pt-3px pb-3px"
        >
          HOME
        </NavLink> */}
        {user ? (
          <>
            {/* <NavLink
              to="/myProfile"
              className="text-1xl min-w-max font-regular text-white  pt-3px pb-3px"
            >
              MY PROFILE
            </NavLink> */}
            <NavLink to={"/main"}>
              <img
                src={require("../assest/download.png")}
                style={{
                  borderTopRightRadius: 30,
                  height: 70,
                  width: 100,
                  borderBottomRightRadius: 30,
                }}
              />
            </NavLink>
            <div className="flex justify-end items-end w-full gap-2 ">
              <NavLink to="/myRecipes" className="btn btn-glass">
                MY Recipes
              </NavLink>
              <Link to="/" onClick={handleLogout} className="btn bg-amber-500 ">
                LOGOUT
              </Link>
            </div>
          </>
        ) : (
          <div className="flex items-end justify-end w-full gap-2">
            <div className=" flex justify-start items-start w-full">
              <img
                src={require("../assest/download.png")}
                style={{
                  borderTopRightRadius: 30,
                  height: 70,
                  width: 100,
                  borderBottomRightRadius: 30,
                }}
              />
            </div>

            <NavLink to="/login">
              <button className="btn btn-glass">LOGIN</button>
            </NavLink>
            <NavLink to="/register">
              {" "}
              <button className="btn bg-amber-500 ">REGISTER</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
