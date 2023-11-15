import instance from ".";

const CreateOneRecipe = async ({ name }) => {
  const res = await instance.post("/api/category", {
    name,
  });
  return res.data;
};

const getAllRecipe = async () => {
  const res = await instance.get("/api/categories");
  return res.data;
};

// const getOneRecipe = async (recipeId)=>{
//   const res = await instance.get(`/notes/${noteId}`)
//   return res.data
// }

export { getAllRecipe, CreateOneRecipe };
