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
    <div className="navbar w-full bg-base-200  top-0  mb-1">
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
                src={require("../assest/Pinch-of-Yum-Logo.png")}
                style={{
                  height: 70,
                  width: 500,
                  borderBottomRightRadius: 30,
                }}
              />
            </NavLink>
            <div className="flex justify-end items-end w-full ">
              <NavLink to="/myRecipes" className="btn btn-glass  bg-amber-500">
                MY Recipes
              </NavLink>
              <Link to="/main" onClick={handleLogout} className="btn ">
                LOGOUT
              </Link>
            </div>
          </>
        ) : (
          <div className="flex items-end justify-end w-full">
            <div className=" flex justify-start items-start w-full ml-5">
              {/* <h1> PINCH OF YUM</h1> */}
              <img
                src={require("../assest/Pinch-of-Yum-Logo.png")}
                style={{
                  height: 70,
                  width: 500,
                  borderBottomRightRadius: 30,
                }}
              />
            </div>

            <NavLink to="/login">
              <button className="btn  bg-glass bg-base-300  text-amber-950">
                LOGIN
              </button>
            </NavLink>
            <NavLink to="/register">
              {" "}
              <button className="btn ml-2 bg-base-300  text-amber-950">
                REGISTER
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
