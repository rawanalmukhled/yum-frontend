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

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(checkToken()); //هني خليت اليوزر هو ترو او فالس  الخاص بالتوكن
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        {/* <img
          className="fixed z-[-1] w-full h-full"
          src={require("./assest/")}
        /> */}

        {/* <Carousel /> */}
        {/* <Navbar /> */}

        <Routes>
          <Route path="/Main" Component={Main} />
          <Route path="/" Component={Home} />
          <Route path="/Login" Component={Login} />
          <Route path="/Register" Component={Register} />

          <Route path="/MyRecipes" Component={MyRecipes} />
          <Route path="/CreateRecipe" Component={CreateRecipe} />
          <Route path="/ViewRecipe" Component={ViewRecipe} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
