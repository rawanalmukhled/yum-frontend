import instance from ".";

const CreateOneRecipe = async (recipe) => {
  const formData = new FormData();

  for (let key in recipe) {
    formData.append(key, recipe[key]);
  }

  const res = await instance.post("/recipes/r", formData);
  return res.data;
};

const getAllRecipe = async () => {
  const res = await instance.get("/categories");
  return res.data;
};

export { getAllRecipe, CreateOneRecipe };
