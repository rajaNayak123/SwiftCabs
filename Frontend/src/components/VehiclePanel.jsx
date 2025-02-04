import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5
          className="p-1 text-center w-[93%] absolute top-0" onClick={() => { props.setVehiclePanelOpen(false);}} >
          <i className="text-3xl cursor-pointer ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Choose Vheicle</h3>
        <div onClick={()=>{props.setSelectRidePanel(true)}} className="flex cursor-pointer p-3 active:border-2 bg-zinc-300 border-black mb-2 rounded-xl items-center justify-between">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
            alt=""
          />
          <div className=" w-1/2l">
            <h4 className="font-semibold text-xl">
              UberGo{" "}
              <span>
                <i className="ri-user-3-line ml-2 mr-2"></i>
              </span>
              4
            </h4>
            <h5 className="font-medium text-sm">2 mini away</h5>
            <p className="font-light text-xs text-gray-500">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-light">$ 199</h2>
        </div>
        <div onClick={()=>{props.setSelectRidePanel(true)}} className="flex cursor-pointer p-3 active:border-2 bg-zinc-300 border-black mb-2 rounded-xl items-center justify-between">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
          />
          <div className=" w-1/2l">
            <h4 className="font-semibold text-xl">
              UberAuto{" "}
              <span>
                <i className="ri-user-3-line ml-2 mr-2"></i>
              </span>
              3
            </h4>
            <h5 className="font-medium text-sm">5 mini away</h5>
            <p className="font-light text-xs text-gray-500">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-light">$ 150</h2>
        </div>
        <div onClick={()=>{props.setSelectRidePanel(true)}} className="flex cursor-pointer p-3 active:border-2 bg-zinc-300 border-black mb-2 rounded-xl items-center justify-between">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className=" w-1/2l">
            <h4 className="font-semibold text-xl">
              Moto{" "}
              <span>
                <i className="ri-user-3-line ml-2 mr-2"></i>
              </span>
              1
            </h4>
            <h5 className="font-medium text-sm">3 mini away</h5>
            <p className="font-light text-xs text-gray-500">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-xl font-light">$ 199</h2>
        </div>
    </div>
  )
}

export default VehiclePanel