import React from "react";

const ViewRecipe = () => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">RECIPE NAME </h2>
          <p>CHEF: OWNER NAME</p>
          <p>CATEGORY : CATEGORY</p>
          <p>INGREDIANETS : LIST OF ING</p>
          <p>INSTRUCTIONS: LIST OF INS</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">BACK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewRecipe;
