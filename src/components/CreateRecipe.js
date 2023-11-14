// import React from "react";
// import { Link } from "react-router-dom";

// const CreateRecipe = () => {
//   return (
//     <div className="flex justify-center items-center flex-col gap-5 bg-slate-600 w-full h-[500px]">
//       <label>
//         Name:
//         <input type="text" name="name" />
//       </label>
//       <label>
//         Category:
//         <input type="text" name="name" />
//       </label>
//       <label>
//         Ingrediants:
//         <input type="text" name="name" />
//       </label>
//       <label className="flex flex-row gap-2">
//         Instructions:
//         <textarea
//           placeholder="Bio"
//           className="textarea textarea-bordered textarea-lg w-full max-w-xs"
//         ></textarea>
//       </label>
//       <Link to={"/MyRecipes"}>
//         <button className="btn glass mt-2 mr-4 ">Create your own</button>
//       </Link>
//     </div>
//   );
// };

// export default CreateRecipe;

import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateOneRecipe } from "../api/recipe";

const AddRecipe = () => {
  const [recipeInfo, setRecipeInfo] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    setRecipeInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate } = useMutation({
    mutationKey: ["AddRecipe"],
    mutationFn: () => CreateOneRecipe(recipeInfo),
    onSuccess: () => {
      navigate("MyRecipes");
      queryClient.invalidateQueries("recipes");
    },
  });

  //// get all categories
  //// needs use quries to gett all then filter
  // const categorylist =
  /// get all ingredients

  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-base-100">
      <div className=" gap-3  w-[50%] h-[80%] flex flex-col justify-center items-center bg-base-200 rounded-md ">
        <h1 className="  text-[35px] font-bold">LOOKS DELICIOUS </h1>

        <input
          name="recipe"
          onChange={handleChange}
          placeholder="Recipe name"
          className="input input-bordered w-[500px] h-[50px] "
        />
        <input
          name="owener"
          onChange={handleChange}
          placeholder="Owner name"
          className="input input-bordered w-[500px] h-[50px] "
        />
        <input
          name="category"
          onChange={handleChange}
          placeholder="Category"
          className="input input-bordered w-[500px] h-[50px] "
        />
        <input
          name="ingredients"
          onChange={handleChange}
          placeholder="Ingredients"
          className="input input-bordered w-[500px] h-[50px] "
        />

        <label className="flex flex-row gap-2">
          <textarea
            placeholder="Instructions"
            className="textarea textarea-bordered textarea-lg w-[500px] h-[100px]"
          ></textarea>
        </label>
        <input
          type="file"
          className="file-input file-input-bordered w-[500px] h-[50px]"
        />
        <button onClick={() => mutate()} className="btn glass mt-2 mr-4 ">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddRecipe;
