import React from "react";
import { NavLink } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return (
    <div class="card w-80 bg-base-100 shadow-xl">
      <img
        className="w-full h-35"
        src={
          recipe.recipeimage.includes("http")
            ? recipe.recipeimage
            : `http://localhost:8000/${recipe.recipeimage}`
        }
      />
      <div class="card-body">
        <h2 class="card-title">{recipe.name}</h2>
        <h1> chef : {recipe.user.username}</h1>
        <div class="card-actions justify-end">
          <NavLink to={"/ViewRecipe"}>
            <button className="btn btn-primary">VIEW</button>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
