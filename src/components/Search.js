import React from "react";

const Search = () => {
  return (
    <div>
      <div className="form-control">
        <div className=" text-[70px]"> Find a recipe </div>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>
    </div>
  );
};

export default Search;
