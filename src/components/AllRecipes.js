import React, { useState, useSyncExternalStore } from "react";
import RecipeCard from "./RecipeCard";
import { getAllCategories, getAllRecipes } from "../api/auth";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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

  const recipesList = recipes.map((recipe) => (
    <RecipeCard recipe={recipe} key={recipe._id} />
  ));
  // ?.filter((recipe) => {
  //   return recipe.name
  //     .toLocaleLowerCase()
  //     .includes(query.toLocaleLowerCase());
  // })
  // ?.filter((recipe) => {
  //   return recipe.category?.name
  //     .toLocaleLowerCase()
  //     .includes(type.toLocaleLowerCase());
  // })

  const categorySelectOptions = categories?.map((category) => {
    return <option value={category.name}>{category.name}</option>;
  });
  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="flex flex-col gap-5 justify-content-center">
          <div className="flex justify-center items-center">
            <div className="section-title text-center ">
              <div className="input-group rounded">
                <div className="flex flex-col">
                  <div>
                    <h1> FIND YOUR RECIPE </h1>
                  </div>
                  <div className="mt-2">
                    <input
                      type="text"
                      placeholder="Search "
                      className="btn glass input input-bordered w-24 md:w-auto ml-4"
                      onChange={(e) => setQuery(e.target.value)}
                    />

                    {/* <input
                  type="search"
                  className="form-control input input-bordered input-error w-full max-w-xs"
                  placeholder="Search"
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search"
                  aria-describedby="search-addon"
                /> */}
                    {/* <input type="text" placeholder="Type here" className="" /> */}
                    <br />

                    <select
                      className="form-select w-20"
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

              {/* <div>
                <AllRecipes />
              </div> */}
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
