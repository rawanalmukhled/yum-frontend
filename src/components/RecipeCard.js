import React from "react";

const RecipeCard = (Recipe) => {
  return (
    //// when the user is login in, he can delete

    <div className="flex flex-row gap-2 mt-1 justify-center flex-wrap mb-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://media.istockphoto.com/id/1295633127/photo/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-lettuce-and-spinach-healthy.jpg?s=612x612&w=0&k=20&c=Qa3tiqUCO4VpVMQDXLXG47znCmHr_ZIdoynViJ8kW0E="
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {Recipe.name}</h2>
          <p>Owner Name</p>
          <div className="card-actions justify-end">
            <link to={"/ViewRecipe"}>
              <button className="btn btn-primary">VIEW</button>
            </link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://media.istockphoto.com/id/1295633127/photo/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-lettuce-and-spinach-healthy.jpg?s=612x612&w=0&k=20&c=Qa3tiqUCO4VpVMQDXLXG47znCmHr_ZIdoynViJ8kW0E="
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> Recipe name </h2>
          <p>Owner Name</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">VIEW</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://media.istockphoto.com/id/1295633127/photo/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-lettuce-and-spinach-healthy.jpg?s=612x612&w=0&k=20&c=Qa3tiqUCO4VpVMQDXLXG47znCmHr_ZIdoynViJ8kW0E="
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> Recipe name </h2>
          <p>Owner Name</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">VIEW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
