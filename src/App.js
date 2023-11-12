// src/App.js
import React from "react";

import Login from "./components/Login";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";

import Main from "./components/Main";

import MyRecipes from "./components/MyRecipes";
import CreateRecipe from "./components/CreateRecipe";
import backGroundImage from "./assest/Banner1.svg";
function App() {
  return (
    <div className="w-screen h-screen ">
      <img className="fixed z-[-1]" src={backGroundImage} />
      <Navbar />
      {/* <Carousel /> */}

      <Routes>
        <Route path="/Login" Component={Login} />
        <Route path="/Main" Component={Main} />
        <Route path="/MyRecipes" Component={MyRecipes} />
        <Route path="/CreateRecipe" Component={CreateRecipe} />
      </Routes>
    </div>
  );
}

export default App;
