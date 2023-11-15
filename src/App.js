// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import UserContext from "./context/UserContext";
import { checkToken } from "./api/auth";
import axios from "axios";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import MyRecipes from "./components/MyRecipes";
import CreateRecipe from "./components/CreateRecipe";
import backGroundImage from "./assest/Banner1.svg";
import Home from "./components/Homepage";
import Register from "./components/Register";

import ViewRecipe from "./components/ViewRecipe";
import Chefs from "./components/Chefs";
import Carousel from "./components/Carousel";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(checkToken()); //هني خليت اليوزر هو ترو او فالس  الخاص بالتوكن
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="max-w-screen h-screen mt-[64px]  ">
        <Navbar />
        {/* <img className="fixed z-[-1]" src={backGroundImage} /> */}

        {/* <Carousel /> */}

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/main" Component={Main} />
          <Route path="/myRecipes" Component={MyRecipes} />
          <Route path="/createRecipe" Component={CreateRecipe} />
          <Route path="/chefs" Component={Chefs} />
          <Route path="/viewRecipe" Component={ViewRecipe} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
