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

  const recipesList = recipes
    ?.filter((recipe) => {
      return recipe.name
        .toLocaleLowerCase()
        .includes(query.toLocaleLowerCase());
    })
    ?.filter((recipe) => {
      return recipe.category?.name
        .toLocaleLowerCase()
        .includes(type.toLocaleLowerCase());
    })
    ?.map((recipe) => <RecipeCard recipe={recipe} key={recipe._id} />);

  const categorySelectOptions = categories?.map((category) => {
    return <option value={category.name}>{category.name}</option>;
  });
  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <br />
                Find a Recipe :
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
              </div>
            </div>
          </div>

          <div className="row justify-content-center">{recipesList}</div>
        </div>
      </div>
    </section>
  );
};

export default AllRecipes;
