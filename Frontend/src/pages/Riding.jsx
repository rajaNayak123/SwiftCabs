import React from "react";
import {Link} from 'react-router-dom'
const Riding = () => {
  return (
    <div className="h-screen">
        <Link to='/user-dashboard' className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-home-4-line"></i>
        </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
          alt=""
        />
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between mb-6">
          <img
            className="h-14"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">RajaNayak</h2>
            <h4 className="text-xl font-semibold -mt-2 -mb-1">OD04 AB1234</h4>
            <p className="text-sm text-gray-600">maruti suzuki alto</p>
          </div>
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
            <div className="flex items-center gap-5 p-2">
              <i className="text-2xl ri-money-rupee-circle-line"></i>
              <div>
                <h3 className="text-lg font-medium">$199</h3>
                <p className="text-sm -mt-1 text-gray-500">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full mt-14 bg-black text-white font-semibold p-2 rounded-lg">Make a Payment</button>
      </div>
      </div>
    </div>
  );
};

export default Riding;
