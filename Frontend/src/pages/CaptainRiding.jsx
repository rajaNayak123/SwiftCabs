import React, { useState,useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";
const CaptainRiding = () => {

  const [finishRidePanel, setfinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null)

  useGSAP(() => {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    }, [finishRidePanel]);
  return (
    <div className="h-screen">
      <Link
        to="/captain-login"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-logout-box-line"></i>
      </Link>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
          alt=""
        />
        <div onClick={()=>{setfinishRidePanel(true)}} className="h-1/4 p-5 flex relative items-center justify-between bg-amber-400">
          <h5 className="p-1 text-center w-[93%] absolute top-0">
            <i className="text-3xl cursor-pointer ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-xl font-bold">4 KM away</h4>
          <button className="mt-3 bg-green-500 text-white font-semibold p-3 px-8 rounded-lg">
            Complete ride
          </button>
        </div>
        <div ref={finishRidePanelRef} className="fixed w-full z-10 bottom-0  bg-white px-3 py-10">
            <FinishRide setfinishRidePanel={setfinishRidePanel}/>
        </div>
      </div>
    </div>
  );
};

export default CaptainRiding;
