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
              <img src="data:image/png;base64,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" />
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
