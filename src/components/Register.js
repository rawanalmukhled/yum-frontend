import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { login } from "../api/auth";
// import UserContext from "../context/UserContext";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState("");
  //   const { user, setUser } = useContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    // onSuccess: () => {
    //   setUser(true);
    //   navigate("/");
  });
  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-base-100">
      <div className=" gap-3  w-[50%] h-[80%] flex flex-col justify-center items-center bg-base-200 rounded-md ">
        <h1 className="  text-[35px] font-bold">JOIN US IN OUR KITCHEN!</h1>
        <div>
          <h1 className="  text-[16px] font-bold">Username: </h1>
          <input
            name="Username"
            onChange={handleChange}
            placeholder="Username"
            className="input input-bordered w-[500px] h-[50px] "
          />
        </div>
        <div>
          <h1 className="  text-[16px] font-bold">Email: </h1>
          <input
            name="email"
            onChange={handleChange}
            placeholder="Email"
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

        <button onClick={() => mutate()} className="btn glass mt-2 mr-4 ">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
