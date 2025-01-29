import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-bottom bg-[url(https://i.pinimg.com/736x/72/1a/e6/721ae6bdbaff95be2b0955dd706e6595.jpg)] h-screen pt-8 py-8 flex flex-col justify-end  w-full bg-red-500">
        <div className="bg-white py-5 pb-6 px-5">
          <h2 className="text-center font-semibold leading-tight ml-3 mb-6">
            Get started with SwiftCab
          </h2>
          <Link to='/user-or-captain' className="py-4 ml-12 mt-6 px-5 bg-gray-900 text-gray-200 font-semibold rounded-md border-none outline-none transition-transform duration-300 ease-out hover:-translate-y-1">
            Get started
            <span className="text-gray-400"> ─ it's free</span>
          </Link>
        </div>
      </div>
    </div>



  );
};

export default Home;
