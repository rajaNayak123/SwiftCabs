import React from "react";
import { Link } from "react-router-dom";

const Captuser = () => {
  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/3f/47/f5/3f47f5b5abc39399926cdbb957fea164.jpg') " }} >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content on top of overlay */}
      <h1 className="text-white text-5xl font-semibold text-center ml-5 mt-4 px-4 z-10 absolute">Tap, ride, arrive</h1>

        <div className="relative z-10 flex items-center justify-center h-full">
            <div className="flex flex-col justify-center ">
                <Link to='/signup' className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm py-3 px-20 rounded">
                User
                </Link>

                 <div className="flex justify-between items-center text-xs uppercase mt-4 gap-4">
                        <span className="w-full h-[1px] bg-gray-300"></span>
                        <span className="text-white">OR</span>
                        <span className="w-full h-[1px] bg-gray-300"></span>
                 </div>

                 <Link to='/captain-signup' className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm py-3 px-20 mt-5 rounded">
                  Rider
                </Link>

            </div>
        </div>
    </div>
  );
};

export default Captuser;
