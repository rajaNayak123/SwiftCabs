import React, { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import {userDataContext} from "../context/UserContext.jsx";
const UserSignup = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confpass, setConfpass] = useState("");

  const navigate = useNavigate()
  const { user, setUser } = useContext(userDataContext)
  const sumbihandler = async (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Please enter your valid email");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    const newdata = { fullname, username, email, password};
     
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`,newdata)
    if(response.status == 201){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/dashboard')
    }
    setFullname("");
    setUsername("");
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
          onSubmit={sumbihandler}
          className="bg-white p-4 max-w-xs rounded-lg shadow-md"
        >
          <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            Welcome to our <span className="text-[#7747ff]">App</span>
          </div>
          <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
            Register to your account
          </div>
          <div className="relative mt-4">
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Full Name"
              className="w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="relative mt-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="User Name"
              className="w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="relative mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="relative mt-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* <div className="relative mt-4">
            <input
              type="password"
              value={confpass}
              onChange={(e) => setConfpass(e.target.value)}
              placeholder="Conform Password"
              className="w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div> */}
          <button
            type="submit"
            className="w-full py-3 mt-4 text-sm font-medium text-white uppercase bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign up
          </button>
          <p className="mt-4 text-sm text-center text-gray-500">
            If already have an account?
            <Link
              to="/login"
              className="underline text-indigo-500 hover:text-indigo-700"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
