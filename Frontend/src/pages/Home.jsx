import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-bottom bg-[url(https://i.pinimg.com/736x/3f/47/f5/3f47f5b5abc39399926cdbb957fea164.jpg)] h-screen pt-8 py-8 flex flex-col justify-end  w-full bg-red-500">
        <div className="bg-white py-5 pb-6 px-5">
          <h2 className="text-2xl font-semibold  leading-tight ml-8 mb-6">
            Get started with SwiftCab
          </h2>
          <Link to='/user-or-captain' class="py-4 ml-20 mt-6 px-5 bg-gray-900 text-gray-200 font-semibold rounded-md border-none outline-none transition-transform duration-300 ease-out hover:-translate-y-1">
            Get started
            <span class="text-gray-400"> ─ it's free</span>
          </Link>
        </div>
      </div>
    </div>



  );
};

export default Home;
