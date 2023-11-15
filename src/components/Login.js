import { useMutation } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useState } from "react";
import { login } from "../api/auth";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Logining = () => {
  const [userInfo, setUserInfo] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/main");
    },
  });
  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-base-100">
      <div className=" gap-3  w-[50%] h-[80%] flex flex-col justify-center items-center bg-base-200 rounded-md ">
        <h1 className="  text-[35px] font-bold">WELCOME TO YOUR KITCHEN!</h1>
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
            onChange={handleChange}
            placeholder="Password"
            type="password"
            className="input input-bordered w-[500px] h-[50px] "
          />
        </div>

        <button onClick={() => mutate()} className="btn glass ">
          Login
        </button>
      </div>
    </div>
  );
};

export default Logining;
