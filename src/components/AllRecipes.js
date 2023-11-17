import React, { useState, useSyncExternalStore } from "react";
import RecipeCard from "./RecipeCard";
import { getAllCategories, getAllRecipes } from "../api/auth";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import mainBg from "../assest/mainBg.jpeg";
const AllRecipes = () => {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  // const [showModal, setShowModal] = useState(false);

  const { data: recipes, isLoading } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => getAllRecipes(),
  });
  const { data: categories, isLoading: categoryLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });
  if (isLoading || categoryLoading) return <h1>loading...</h1>;

  const recipesList = recipes
    ?.filter((recipe) => {
      return recipe.name
        ?.toLocaleLowerCase()
        .includes(query?.toLocaleLowerCase());
    })
    ?.filter((recipe) => {
      return recipe.category?.name
        ?.toLocaleLowerCase()
        .includes(type?.toLocaleLowerCase());
    })
    ?.map((recipe) => <RecipeCard recipe={recipe} key={recipe._id} />);

  const categorySelectOptions = categories?.map((category) => {
    return <option value={category.name}>{category.name}</option>;
  });
  return (
    <section id="doctors" className="relative doctor-section pt-[140px] ">
      {/* <img src={mainBg} className="absolute w-[100%] h-[100vh] " /> */}
      <div className="container">
        <div className="flex flex-col gap-5 justify-content-center">
          <div className="flex justify-center items-center">
            <div className="section-title text-center ">
              <p className="text-2xl p-10 text-white font-extrabold">
                Find a Recipe :
              </p>
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control bg-opacity-50 input input-bordered input-error w-full max-w-xs"
                  placeholder="Search"
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                {/* <input type="text" placeholder="Type here" className="" /> */}
                <br />
                <select
                  className="form-select w-1/2 h-12"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option value="" selected>
                    All
                  </option>
                  {categorySelectOptions}
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-10 flex-wrap">
            {recipesList}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllRecipes;
