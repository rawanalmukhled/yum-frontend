import React from "react";

import { Input, Button } from "daisyui";
import RecipeCard from "./RecipeCard";
import Category from "./Category";
import AllRecipes from "./AllRecipes";

const Main = () => {
  return (
    <div className="flex flex-row back">
      <div>
        <Category />
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex justify-center items-center  h-[400px] w-[700px] "></div>
        <div>
          <AllRecipes />
        </div>
      </div>
    </div>
  );
};
export default Main;
