import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    //// when the user is login in, he can delete

    <div className="flex flex-row gap-2 mt-1 justify-center flex-wrap mb-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={recipe.recipeimage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {recipe.name}</h2>
          <h1> chef : {recipe.user.username}</h1>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">VIEW</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl"></div>
    </div>
  );
};

export default RecipeCard;
