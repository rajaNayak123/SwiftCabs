import React, { useRef, useState } from "react";
import LocationSearchPanel from "../components/LocationSearchPanel.jsx";
import VehiclePanel from "../components/VehiclePanel.jsx";
import SelectRide from "../components/SelectRide.jsx";
import LookingForDriver from "../components/LookingForDriver.jsx";
import WatingForDriver from "../components/WatingForDriver.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const UserDashboard = () => {
  const [pickupLoca, setPickupLoca] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [selectRidePanel, setSelectRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [watingForDriver, setWatingForDriver] = useState(false);


  const panelRref = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclPanelRef = useRef(null);
  const selectRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const watingForDriverRef = useRef(null);

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

  useGSAP(() => {
    if (selectRidePanel) {
      gsap.to(selectRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(selectRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [selectRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (watingForDriver) {
      gsap.to(watingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(watingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [watingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="h-full w-full object-cover"
        src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
        alt=""
      />
      <div className="h-screen w-screen"></div>
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
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      {/* Vehicle Panel */}
      <div
        ref={vehiclPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10"
      >
        <VehiclePanel
          setSelectRidePanel={setSelectRidePanel}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
      </div>

      {/* Select-Ride Panel */}
      <div ref={selectRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10" >
        <SelectRide setSelectRidePanel={setSelectRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10">
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div ref={watingForDriverRef} className="fixed w-full z-10 bottom-0 bg-white px-3 py-10">
        <WatingForDriver watingForDriver={watingForDriver}/>
      </div>
    </div>
  );
};

export default UserDashboard;
