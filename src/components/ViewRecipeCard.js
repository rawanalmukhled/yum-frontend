import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const ViewRecipeCard = ({ recipe }) => {
  return (
    <div>
      <div classname="flex flex-col">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="flex justify-center items-center mt-10">
          <div class="card w-96 bg-base-100 shadow-xl image-full  ">
            <figure>
              <img src={recipe.recipeimage} alt="" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{recipe.name}</h2>
              <p>{recipe.username}</p>
              <p>{recipe.category}</p>
              <p>{recipe.ingredients}</p>
              <p> {recipe.instructions}</p>
              <div class="card-actions justify-end">
                <NavLink to={"/main"}>
                  <button class="btn btn-primary">BACK</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipeCard;
