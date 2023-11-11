import React from "react";
import { Link } from "react-router-dom";

const CreateRecipe = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 bg-slate-600 w-full h-[500px]">
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Category:
        <input type="text" name="name" />
      </label>
      <label>
        Ingrediants:
        <input type="text" name="name" />
      </label>
      <label className="flex flex-row gap-2">
        Instructions:
        <textarea
          placeholder="Bio"
          className="textarea textarea-bordered textarea-lg w-full max-w-xs"
        ></textarea>
      </label>
      <Link to={"/MyRecipes"}>
        <button className="btn glass mt-2 mr-4 ">Create your own</button>
      </Link>
    </div>
  );
};

export default CreateRecipe;
