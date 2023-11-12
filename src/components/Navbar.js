// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-200 flex flex-row">
        <div className="flex-1">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className=" rounded-full w-60">
              <img src="https://media.istockphoto.com/id/1295633127/photo/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-lettuce-and-spinach-healthy.jpg?s=612x612&w=0&k=20&c=Qa3tiqUCO4VpVMQDXLXG47znCmHr_ZIdoynViJ8kW0E=" />
            </div>
          </label>

          <a className="btn btn-ghost normal-case text-xl">Pinch of Yum</a>
          <div className="flex-none">
            <Link to={"/MyRecipes"}>
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a>My Recipes </a>
                </li>
              </ul>
            </Link>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Hi, username </a>
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
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
