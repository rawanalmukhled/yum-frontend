import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllCategories } from "../api/auth";

const Category = () => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });
  if (isLoading) return <h1>loading...</h1>;

  const categoriesList = categories.map((category) => (
    <categoryBtn category={category} key={category.name} />
  ));

  console.log(categoriesList);

  return <categoryBtn />;
};

export default Category;
