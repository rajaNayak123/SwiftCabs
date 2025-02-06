import React from 'react'

const WatingForDriver = (props) => {
  return (
    <div>
    <h5
      className="p-1 text-center w-[93%] absolute top-0"
      onClick={() => {
        props.watingForDriverRef(true)
      }}
    >
      <i className="text-3xl cursor-pointer ri-arrow-down-wide-line"></i>
    </h5>
    
     <div className='flex items-center justify-between'>
        <img
        className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt=""/>
        <div className='text-right'>
          <h2 className='text-lg font-medium'>RajaNayak</h2>
          <h4 className='text-xl font-semibold -mt-2 -mb-1'>OD04 AB1234</h4>
          <p className='text-sm text-gray-600'>maruti suzuki alto</p>
        </div>
      </div>

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

export default WatingForDriver