import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { captainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { captain, setCaptain } = useContext(captainDataContext);
  const navigate = useNavigate();

  const sumbitHandler = async (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Please enter valid email address");
      return;
    }
    const newdata = { email, password };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`,newdata);
    if (response.status == 200) {
      const data = response.data;
      setCaptain(data);
      navigate("/captain-dashboard");
    }

    setEmail("");
    setPassword("");
  };
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/3f/47/f5/3f47f5b5abc39399926cdbb957fea164.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative z-10">
        <form
          onSubmit={sumbitHandler}
          className="bg-white p-4 max-w-xs rounded-lg shadow-md"
        >
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Welcome back to <span className="text-[#7747ff]">App</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Log in to your account
          </div>

          <div className="relative mt-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="relative mt-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 text-sm font-medium text-white uppercase bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Log in
          </button>
          <p className="mt-4 text-sm text-center text-gray-500">
            If have no account?
            <Link
              to="/captain-signup"
              className="underline text-indigo-500 hover:text-indigo-700"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CaptainLogin;
