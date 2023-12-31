import { useMutation } from "@tanstack/react-query";
import React, { useState, useContext } from "react";
import { register } from "../api/auth";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    mutate();
    console.log("hello");
  };

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/main");
    },
  });
  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-base-100">
      <div className=" gap-3  w-[50%] h-[80%] flex flex-col justify-center items-center bg-base-200 rounded-md ">
        <h1 className="  text-[35px] font-bold">JOIN US IN OUR KITCHEN!</h1>
        <div>
          <h1 className="  text-[16px] font-bold">Username: </h1>
          <input
            name="username"
            onChange={handleChange}
            placeholder="Username"
            className="input input-bordered w-[500px] h-[50px] "
          />
        </div>

        <div>
          <h1 className="  text-[16px] font-bold">Password: </h1>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            className="input input-bordered w-[500px] h-[50px] "
          />
        </div>
        <div>
          <h1 className="  text-[16px] font-bold">Image: </h1>
          <input
            type="file"
            className="file-input file-input-bordered w-[500px] h-[50px]"
          />
        </div>

        <button onClick={handleSubmit} className="btn glass ">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
