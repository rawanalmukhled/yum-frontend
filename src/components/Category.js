import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllCategories } from "../api/auth";
import CategoryBtn from "./CategoryBtn";

const Category = () => {
  const queryClient = useQueryClient();
  const { data: categories, isLoading } = useQuery({
    queryKey: ["Category"],
    queryFn: () => getAllCategories(),
  });
  if (isLoading) return <h1>loading...</h1>;
  const categoriesList = categories.map((category) => (
    <CategoryBtn category={category} key={category.name} />
  ));
  return <div>{categoriesList}</div>;
};

export default Category;

// //
{
  /* <div>
      <div className="flex justify-start items-start mt-2 ml-3 ">
        <ul className="menu bg-base-200 rounded-box w-60">
          <li>
            <div className="flex flex-row justify-between">
              {Category?.map((category) => {
                return (
                  <div>
                    {" "}
                    <h1> {category.name}</h1>
                    <img
                      src={category.image}
                      className="h-12 w-12 rounded-full"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    />
                  </div>
                );
              })}
              {/* <p>{categories.category.name}</p>
              <img
                src={categories.category.image}
                className="h-12 w-12 rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              /> */
}
{
  /* </div>
          </li>
        </ul>
      </div>
    </div> */
}
