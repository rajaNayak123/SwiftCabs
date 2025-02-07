import React, { useRef,useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
const CaptainDashboard = () => {

    const [ridePopUp, setridePopUp] = useState(true)
    const ridePopUpRef = useRef(null)

    const [confirmRidePopUp, setConfirmRidePopUp] = useState(false)
    const confirmRidePopUpRef = useRef(null)

    useGSAP(() => {
      if (ridePopUp) {
        gsap.to(ridePopUpRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopUpRef.current, {
          transform: "translateY(100%)",
        });
      }
    }, [ridePopUp]);

    useGSAP(() => {
      if (confirmRidePopUp) {
        gsap.to(confirmRidePopUpRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopUpRef.current, {
          transform: "translateY(100%)",
        });
      }
    }, [confirmRidePopUp]);

  return (
    <div className="h-screen">
      <Link
        to="/captain-login"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-logout-box-line"></i>
      </Link>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
          alt=""
        />
        <div className="h-2/5 p-6">
          <CaptainDetails/>
        </div>
        <div ref={ridePopUpRef} className="fixed w-full z-10 bottom-0  bg-white px-3 py-10" >
            <RidePopUp setridePopUp={setridePopUp} setConfirmRidePopUp={setConfirmRidePopUp}/>
        </div>
        <div ref={confirmRidePopUpRef} className="fixed w-full h-screen z-10 bottom-0  bg-white px-3 py-10" >
            <ConfirmRidePopUp setConfirmRidePopUp={setConfirmRidePopUp} setridePopUp={setridePopUp}/>
        </div>
      </div>
    </div>
  );
};

export default CaptainDashboard;
