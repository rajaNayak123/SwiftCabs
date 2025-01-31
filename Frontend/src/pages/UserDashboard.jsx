import React, { useRef, useState } from "react";
import LocationSearchPanel from "../components/LocationSearchPanel.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const UserDashboard = () => {
  const [pickupLoca, setPickupLoca] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRref = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclPanelRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);

  const sumbitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRref.current, {
        height: "70%",
        padding: 20,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRref.current, {
        height: "0%",
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanelOpen) {
      gsap.to(vehiclPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanelOpen]);

  return (
    <div className="h-screen relative overflow-hidden">
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative ">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute right-7 top-4 opacity-0"
          >
            <i className="ri-arrow-down-double-fill text-2xl cursor-pointer"></i>
          </h5>
          <h3 className="text-xl font-bold mb-2 text-[#1e0e4b] ml-3">
            Find a trip
          </h3>
          <form onSubmit={sumbitHandler}>
            <div className="relative mt-4">
              <input
                type="text"
                value={pickupLoca}
                onChange={(e) => {
                  setPickupLoca(e.target.value);
                }}
                onClick={() => {
                  setPanelOpen(true);
                }}
                placeholder="Add to pick-up location"
                className="w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="relative mt-4">
              <input
                type="text"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
                onClick={() => {
                  setPanelOpen(true);
                }}
                placeholder="Enter your destination"
                className="w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </form>
        </div>
        <div ref={panelRref} className="bg-white h-[] ">
          <LocationSearchPanel setPanelOpen={setPanelOpen}  setVehiclePanelOpen={setVehiclePanelOpen}/>
        </div>
      </div>
      <div
        ref={vehiclPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10"
      >
        <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={()=>{
          setVehiclePanelOpen(false)
        }}><i className="text-3xl cursor-pointer ri-arrow-down-wide-line"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose Vheicle</h3>
        <div className="flex cursor-pointer p-3 active:border-2 bg-zinc-300 border-black mb-2 rounded-xl items-center justify-between">
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
        <div className="flex cursor-pointer p-3 active:border-2 bg-zinc-300 border-black mb-2 rounded-xl items-center justify-between">
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
        <div className="flex cursor-pointer p-3 active:border-2 bg-zinc-300 border-black mb-2 rounded-xl items-center justify-between">
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
    </div>
  );
};

export default UserDashboard;
