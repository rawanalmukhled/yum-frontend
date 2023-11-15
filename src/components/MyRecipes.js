import React from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";
import Category from "./Category";
import { useQuery } from "@tanstack/react-query";
import { getallMyrecipes } from "../api/auth";

const MyRecipes = () => {
  const { data } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getallMyrecipes(),
  });

  const myRecipeList = data?.map((recipe) => {
    return <RecipeCard recipe={recipe} />;
  });
  return (
    <div className="flex flex-row">
      <div>
        <Category />
      </div>
      <div className="flex flex-col items-center w-full ">
        <div className="flex items-end justify-between w-full text-black ">
          <input
            type="text"
            placeholder="Search "
            className="btn glass input input-bordered w-24 md:w-auto ml-4"
          />
          <Link to={"/CreateRecipe"}>
            <button className="btn glass mt-2 mr-4 ">Create your own</button>
          </Link>
        </div>
        <div>{myRecipeList}</div>
      </div>
    </div>
  );
};

export default MyRecipes;
