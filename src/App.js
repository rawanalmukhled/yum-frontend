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
<<<<<<< HEAD
=======
import Chefs from "./components/Chefs";
import Carousel from "./components/Carousel";

>>>>>>> f5619a846eef5a7b56a2554917ed98cfae59695f
function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(checkToken()); //هني خليت اليوزر هو ترو او فالس  الخاص بالتوكن
  }, []);

  return (
<<<<<<< HEAD
    <div className="w-screen h-screen ">
      <UserContext.Provider value={{ user, setUser }}>
        <img className="fixed z-[-1]" src={backGroundImage} />
=======
    <UserContext.Provider value={{ user, setUser }}>
      <div className="max-w-screen h-screen mt-[64px]  ">
>>>>>>> f5619a846eef5a7b56a2554917ed98cfae59695f
        <Navbar />
        {/* <img className="fixed z-[-1]" src={backGroundImage} /> */}

        {/* <Carousel /> */}
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Login" Component={Login} />
          <Route path="/Register" Component={Register} />
          <Route path="/Main" Component={Main} />
          <Route path="/MyRecipes" Component={MyRecipes} />
          <Route path="/CreateRecipe" Component={CreateRecipe} />
          <Route path="/ViewRecipe" Component={ViewRecipe} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
