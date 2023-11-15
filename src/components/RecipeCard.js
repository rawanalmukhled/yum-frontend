import React from "react";

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className="flex flex-row gap-2 justify-center flex-wrap ">
      <div className="card w-96 h-[500px] bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-[300px]"
            src={
              recipe.recipeimage.includes("http")
                ? recipe.recipeimage
                : `http://localhost:8000/${recipe.recipeimage}`
            }
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {recipe.name}</h2>
          <h1> chef : {recipe.user.username}</h1>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">VIEW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
