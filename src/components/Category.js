import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllCategories } from "../api/auth";
import CategoryBtn from "./CategoryBtn";

const Category = () => {
  const [query, setQuery] = useState("");

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });
  if (isLoading) return <h1>loading...</h1>;

  const categoriesList = categories.map((category) => (
    <CategoryBtn category={category} key={category.name} />
  ));

  console.log(categoriesList);

  return <div className="flex flex-col gap-3">{categoriesList}</div>;
};

export default Category;
