import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [logindata, setloginData] = useState("");

  const sumbitHandler = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    const newdata = { email, password };

   
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
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
              to="/signup"
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

export default UserLogin;
