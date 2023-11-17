import React from "react";
import bg from "../assest/bg.jpeg";

import Category from "./Category";
import AllRecipes from "./AllRecipes";

const Main = () => {
  return (
    <div className="relative">
      <img src={bg} className="fixed w-[100%] h-[100vh] " />
      <div className="flex flex-row back relative w-full h-full">
        <div className="mt-10">
          <Category />
        </div>
        <div className="flex flex-col items-center w-full h-full">
          <div className="w-full h-full ">
            <AllRecipes />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
