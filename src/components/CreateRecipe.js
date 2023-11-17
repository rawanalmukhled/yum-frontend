import { getAllCategories } from "../api/auth";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateOneRecipe } from "../api/recipe";
import Category from "./Category";
import mainBg from "../assest/mainBg.jpeg";

const AddRecipe = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "recipeimage") {
      setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.files[0] });
    } else {
      setRecipeInfo({ ...recipeInfo, [e.target.name]: e.target.value });
    }
  };

  const queryClient = useQueryClient();
  const [type, setType] = useState("");

  const { data: categories, isLoading: categoryLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });

  const { mutate } = useMutation({
    mutationKey: ["AddRecipe"],
    mutationFn: () => CreateOneRecipe({ ...recipeInfo, category: type }),
    onSuccess: () => {
      navigate("/myRecipes");
      queryClient.invalidateQueries("recipes");
    },
  });

  if (categoryLoading) return <h1>loading...</h1>;

  const categorySelectOptions = categories?.map((category) => {
    return <option value={category._id}>{category.name}</option>;
  });

  return (
    <div className="absolute top-0 h-screen w-screen flex justify-center items-center bg-base-100">
      <img src={mainBg} className="fixed z-[1] w-[100%] h-[100vh] " />

      <div className="fixed z-[2] gap-3  w-[50%] h-[80%] flex flex-col justify-center items-center bg-base-200 rounded-md ">
        <h1 className="  text-[35px] font-bold">LOOKS DELICIOUS </h1>

        <input
          name="name"
          onChange={handleChange}
          placeholder="Recipe name"
          className="input input-bordered w-[500px] h-[50px] "
        />

        <select
          className="form-select"
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="" selected>
            All
          </option>
          {categorySelectOptions}
        </select>
        <input
          name="ingredients"
          onChange={handleChange}
          placeholder="Ingredients"
          className="input input-bordered w-[500px] h-[50px] "
        />

        <label className="flex flex-row gap-2">
          <textarea
            name="instructions"
            onChange={handleChange}
            placeholder="Instructions"
            className="textarea textarea-bordered textarea-lg w-[500px] h-[100px]"
          ></textarea>
        </label>
        <input
          type="file"
          onChange={handleChange}
          name="recipeimage"
          className="file-input file-input-bordered w-[500px] h-[50px]"
        />
        <button onClick={mutate} className="btn glass ">
          Add
        </button>
      </div>
    </div>
  );
};

export default AddRecipe;
