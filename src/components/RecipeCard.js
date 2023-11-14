import React from "react";
import { NavLink } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return (
    //// when the user is login in, he can delete

    <div className="flex flex-row gap-2 mt-1 justify-center flex-wrap mb-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={recipe.recipeimage} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {recipe.name}</h2>
          <p> {recipe.user.username}</p>

          <div className="card-actions justify-end">
            <NavLink to={"/ViewRecipe"}>
              <button className="btn btn-primary">VIEW</button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* <div className="card w-96 bg-base-100 shadow-xl"></div> */}
    </div>
  );
};

export default RecipeCard;
