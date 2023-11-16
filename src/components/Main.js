import React from "react";

import Category from "./Category";
import AllRecipes from "./AllRecipes";

import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className="flex flex-row back relative w-full h-full">
      <div className="flex flex-col ">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-row">
          <div className="">
            <Category />
          </div>
          <div className="">
            <AllRecipes />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
