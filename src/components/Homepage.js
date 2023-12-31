import React from "react";
import { Link } from "react-router-dom";
import homepageimage from "../assest/Group_20.svg";
const Home = () => {
  // add button <loginig> <register>

  return (
    <div className="w-screen h-screen relative">
      <img className="md:absolute md:top-[-10rem]" src={homepageimage} />
      <div className="md:absolute md:top-96 left-[320px] flex gap-5  z-[1]">
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
