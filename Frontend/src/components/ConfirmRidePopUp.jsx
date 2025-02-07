import React from "react";

const ConfirmRidePopUp = (props) => {
  return (
    <div>
      <h5 onClick={() => {props.setridePopUp(false)}} className="p-1 text-center w-[93%] absolute top-0">
        <i className="text-3xl cursor-pointer ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm this ride to start!</h3>

      <div className="flex items-center justify-between mb-3 bg-gray-100 rounded-lg p-3">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src="https://i.pinimg.com/736x/89/2e/bd/892ebdb13e4eedbd842b2b346d536c43.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">raja nayak</h2>
        </div>
        <h5 className="text-lg font-semibold">2.4 KM</h5>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-3">
          <div className="flex items-center gap-5 p-2 border-b-2">
            <i className="text-2xl ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">596/E-4</h3>
              <p className="text-sm -mt-1 text-gray-500">
                Blishapur, Starex University
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-b-2">
            <i className="text-2xl ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">596/E-4</h3>
              <p className="text-sm -mt-1 text-gray-500">
                Blishapur, Starex University
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2">
            <i className="text-2xl ri-money-rupee-circle-line"></i>
            <div>
              <h3 className="text-lg font-medium">$199</h3>
              <p className="text-sm -mt-1 text-gray-500">Cash Cash</p>
            </div>
          </div>
        </div>
        <button className="w-72 mt-3 bg-green-500 text-white font-semibold p-2 rounded-lg">
          Accept
        </button>
        <button
          onClick={() => {
            props.setConfirmRidePopUp(false)
            props.setridePopUp(false)
        }}
          className="w-72 mt-3 bg-red-500 text-white font-semibold p-2 rounded-lg"
        >
          Cancle
        </button>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
