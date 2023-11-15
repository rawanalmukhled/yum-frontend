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
    <div className="navbar bg-base-100 absolute z-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // <div className="flex-none menu menu-horizontal px-1 ">
    //   <div className="w-full flex justify-end gap-6 z-10">
    //     <NavLink
    //       to="/"
    //       className="text-1xl min-w-max font-regular text-white border border-[#573312] pt-3px pb-3px"
    //     >
    //       HOME
    //     </NavLink>

    //     <NavLink
    //       to="/chefs"
    //       className="text-1xl min-w-max font-regular text-white border border-[#573312] pt-3px pb-3px"
    //     >
    //       Chefs
    //     </NavLink>
    //     <div className="text-white font-bold">|</div>

    //     {user ? (
    //       <>
    //         <NavLink
    //           to="/myProfile"
    //           className="text-1xl min-w-max font-regular text-white border border-[#573312] pt-3px pb-3px"
    //         >
    //           MY PROFILE
    //         </NavLink>
    //         <NavLink
    //           to="/myRecipes"
    //           className="text-1xl min-w-max font-regular text-white border border-[#573312] pt-3px pb-3px"
    //         >
    //           MY Recipes
    //         </NavLink>
    //         <Link
    //           to="/"
    //           onClick={handleLogout}
    //           className="text-1xl min-w-max font-regular text-white border border-[#573312] pt-3px pb-3px"
    //         >
    //           LOGOUT
    //         </Link>
    //       </>
    //     ) : (
    //       <>
    //         <NavLink
    //           to="/register"
    //           className="text-1xl min-w-max font-regular text-white border border-[#573312] pt-3px pb-3px"
    //         >
    //           REGISTER
    //         </NavLink>
    //         <NavLink
    //           to="/login"
    //           className="text-1xl min-w-max font-regular text-white border border-[#573312] pt-3px pb-3px"
    //         >
    //           LOGIN
    //         </NavLink>
    //       </>
    //     )}
    //   </div>
    // </div>
  );
};

export default Navbar;
