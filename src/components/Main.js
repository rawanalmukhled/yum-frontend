import React from "react";

import { Input, Button } from "daisyui";
import RecipeCard from "./RecipeCard";
import Category from "./Category";
import AllRecipes from "./AllRecipes";
import MyRecipes from "./MyRecipes";

const Main = () => {
  return (
    <div className="flex flex-row back relative w-full h-full">
      <div className="">
        <Category />
      </div>
      <div className="flex flex-col items-center w-full h-full">
        <div className="w-full h-full ">
          <AllRecipes />
        </div>
      </div>
    </div>
  );
};
export default Main;
