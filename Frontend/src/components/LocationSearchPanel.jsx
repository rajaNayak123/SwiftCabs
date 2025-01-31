import React from "react";

const LocationSearchPanel = (props) => {
  
  const arr = [
    "24B, Near bilashpur, king highway starex University",
    "24B, Near bilashpur, king highway starex University",
    "24B, Near bilashpur, king highway starex University",
    "24B, Near bilashpur, king highway starex University",
  ];
  return (
    <div>
      {arr.map((ele,ind) => {
        return (
          <div key={ind} onClick={()=>{
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }} className=" cursor-pointer flex gap-4 border-2 p-3 border-gray-200 active:border-black rounded-xl items-center my-3 justify-start">
            <h2 className="bg-[#eee] h-11 flex items-center justify-center w-16 rounded-full">
              <i className="ri-map-pin-line text-xl"></i>
            </h2>
            <h4 className="font-normal">
              24B, Near bilashpur, king highway starex University
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
