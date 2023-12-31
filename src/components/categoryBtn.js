import React from "react";

const CategoryBtn = (category) => {
  console.log(category.category.name);
  return (
    <div className="flex justify-start items-start ">
      <ul className="menu bg-base-200 rounded-box w-60">
        <li>
          <div className="flex flex-row justify-between">
            <p>{category.category.name}</p>
            <img
              src={category.category.image}
              className="h-12 w-12 rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CategoryBtn;
