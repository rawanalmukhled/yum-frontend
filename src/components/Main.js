import React from "react";

import { Input, Button } from "daisyui";
import Search from "./Search";
import RecipeCard from "./RecipeCard";

const Main = () => {
  return (
    <div className="flex flex-row">
      <div className="flex justify-start items-start bg-lime-400 ">
        <ul className="menu bg-base-200 rounded-box w-60">
          <li>
            {/* <div className="flex justify-evenly space-y-2"> </div> */}
            <a>
              Category
              <img
                src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699574400&semt=sph"
                className="h-5 w-5 flex justify-end items-end rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ></img>
            </a>
          </li>
          <li>
            <a>
              Category
              <img
                src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699574400&semt=sph"
                className="h-5 w-5 flex justify-end items-end rounded-full"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ></img>
            </a>
          </li>
          <li>
            <a>
              Category
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center bg-orange-500 w-full">
        <div className="flex justify-center items-center  h-[400px] w-[700px] ">
          <Search />
        </div>
        <div>
          <RecipeCard />
        </div>
      </div>
    </div>
  );
};
export default Main;
