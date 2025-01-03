import React from "react";
import { Link } from "react-router-dom";
const UserSignup = () => {
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

      {/* Form */}
      <div className="relative z-10">
        <form className="flex flex-col gap-2.5 max-w-xs p-5 bg-white rounded-2xl relative">
          <p className="text-2xl text-royalblue font-semibold tracking-tight flex items-center pl-7 relative">
            Register
            <span className="absolute h-4 w-4 rounded-full left-0 bg-royalblue"></span>
            <span className="absolute h-4 w-4 animate-pulse rounded-full left-0 bg-royalblue"></span>
          </p>
          <p className="text-gray-600 text-sm">
            Signup now and get full access to our app.
          </p>
          <div className="flex w-full gap-1.5"></div>

          <label className="relative">
            <input
              required
              placeholder=""
              type="email"
              className="w-full p-2.5 pt-5 border border-gray-400 rounded-md outline-none"
            />
            <span className="absolute left-2.5 top-3.5 text-gray-500 text-sm transition-all cursor-text">
              Full Name
            </span>
          </label>

          <label className="relative">
            <input
              required
              placeholder=""
              type="email"
              className="w-full p-2.5 pt-5 border border-gray-400 rounded-md outline-none"
            />
            <span className="absolute left-2.5 top-3.5 text-gray-500 text-sm transition-all cursor-text">
              User Name
            </span>
          </label>

          <label className="relative">
            <input
              required
              placeholder=""
              type="email"
              className="w-full p-2.5 pt-5 border border-gray-400 rounded-md outline-none"
            />
            <span className="absolute left-2.5 top-3.5 text-gray-500 text-sm transition-all cursor-text">
              Email
            </span>
          </label>
          <label className="relative">
            <input
              required
              placeholder=""
              type="password"
              className="w-full p-2.5 pt-5 border border-gray-400 rounded-md outline-none"
            />
            <span className="absolute left-2.5 top-3.5 text-gray-500 text-sm transition-all cursor-text">
              Password
            </span>
          </label>
          <label className="relative">
            <input
              required
              placeholder=""
              type="password"
              className="w-full p-2.5 pt-5 border border-gray-400 rounded-md outline-none"
            />
            <span className="absolute left-2.5 top-3.5 text-gray-500 text-sm transition-all cursor-text">
              Confirm password
            </span>
          </label>
          <button class="relative overflow-hidden h-12 px-8 rounded-full bg-transparent bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-none cursor-pointer transition-all duration-200 ease-out hover:before:scale-y-100 active:scale-90">
            <span class="relative z-10">Sign Up</span>
            <span class="absolute inset-0 transform scale-y-0 origin-bottom rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-transform duration-600 ease-out"></span>
          </button>

          <p className="text-center text-gray-600 text-sm">
            have an account?
            <Link to="/login" className="text-royalblue hover:underline">
              SignIn
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;
