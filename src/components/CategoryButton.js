import React from "react";

const CategoryButton = (category) => {
  console.log(category.category.name);
  return (
    <div className="flex justify-start items-start mr-2 mt-2">
      <ul className="menu bg-base-200 rounded-box w-60">
        <li>
          <div className="flex flex-row justify-between text-[20px] text-amber-950 ">
            <p class="italic">{category.category.name}</p>
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

export default CategoryButton;
