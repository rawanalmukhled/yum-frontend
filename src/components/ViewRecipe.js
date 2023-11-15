import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllRecipes } from "../api/auth";
import ViewRecipeCard from "./ViewRecipeCard";

const ViewRecipe = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const { data: recipes, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getAllRecipes(),
  });
  if (isLoading) return <h1>loading...</h1>;
  const viewrecipe = recipes.map((recipe) => (
    <ViewRecipeCard recipe={recipe} key={recipe._id} />
  ));

  // recipes?.map((recipe) => {
  return (
    <div>
      <div className="row justify-content-center">{viewrecipe}</div>
      {/* <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={recipe.recipeimage} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{recipe.name}</h2>
            <p>{recipe.username}</p>
            <p>{recipe.category}</p>
            <p>{recipe.ingredients}</p>
            <p> {recipe.instructions}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">BACK</button>
            </div>
          </div> */}
      {/* </div> */}
    </div>
  );
};

export default ViewRecipe;
