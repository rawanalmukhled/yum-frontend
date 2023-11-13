import React from "react";
import { Link } from "react-router-dom";
import homepageimage from "../assest/Group_20.svg";
const Home = () => {
  // add button <loginig> <register>

  return (
    <div className="w-screen h-screen ">
      <img className="relative" src={homepageimage} />
      <div className="absolute top-[500px] left-[320px] flex gap-5 m-2 z-[1]">
        <Link to={"/Login"}>
          <button className="btn btn-glass px-9  ">Login</button>
        </Link>
        <Link to={"/Register"}>
          <button className="btn  bg-amber-700 px-9">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
