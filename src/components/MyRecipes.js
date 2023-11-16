import React from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";
import Category from "./Category";
import { useQuery } from "@tanstack/react-query";
import { getallMyrecipes } from "../api/auth";
import Navbar from "./Navbar";

const MyRecipes = () => {
  const { data } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getallMyrecipes(),
  });

  const myRecipeList = data?.map((recipe) => {
    return <RecipeCard recipe={recipe} />;
  });
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="flex flex-row h-screen max-w-screen">
        <div>
          <Category />
        </div>
        <div className="flex flex-col items-center w-full gap-5 h-full  ">
          <div className="flex items-end justify-between gap-5 w-full text-black mt-2 mr-3 ml-2 ">
            <input
              type="text"
              placeholder="Search "
              className="btn glass input input-bordered w-24 md:w-auto ml-4"
            />
            <Link to={"/CreateRecipe"}>
              <button className="btn glass  text-amber-950 ">
                Create your own
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-10 flex-wrap">
            {myRecipeList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRecipes;
