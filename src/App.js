// src/App.js
import React from "react";

import Login from "./components/Login";
import Navbar from "./components/Navbar";

import { Route, Routes } from "react-router-dom";

import Main from "./components/Main";

import MyRecipes from "./components/MyRecipes";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Carousel /> */}

      <Routes>
        <Route path="/Login" Component={Login} />
        <Route path="/Main" Component={Main} />
        <Route path="/MyRecipes" Component={MyRecipes} />
      </Routes>
    </div>
  );
}

export default App;
