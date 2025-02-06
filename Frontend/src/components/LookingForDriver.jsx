import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehicleFound(true)
        }}
      >
        <i className="text-3xl cursor-pointer ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looking For a Driver</h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png"
          alt=""
        />
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
        
      </div>
    </div>
  )
}

export default LookingForDriver