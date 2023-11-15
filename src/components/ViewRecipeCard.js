import React from "react";

const ViewRecipeCard = ({ recipe }) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
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
        </div>
      </div>
    </div>
  );
};

export default ViewRecipeCard;