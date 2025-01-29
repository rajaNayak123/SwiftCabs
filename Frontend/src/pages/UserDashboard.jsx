import React,{useRef, useState} from "react";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
const UserDashboard = () => {
  const [pickupLoca, setPickupLoca] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRref = useRef(null)
  const panelCloseRef = useRef(null)

  const sumbitHandler = (e) =>{
      e.preventDefault()
  }

  useGSAP(()=>{
    if(panelOpen){
      gsap.to(panelRref.current,{
        height:'70%'
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRref.current,{
        height:'0%'
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen])
  return (
    <div className="h-screen relative">
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://i.pinimg.com/736x/28/8b/44/288b44c8e76a00feed1853b351057876.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-5 bg-white ">
          <h5 ref={panelCloseRef} onClick={()=>{setPanelOpen(false)}} className="absolute right-7 top-4 opacity-0">
          <i className="ri-arrow-down-double-fill cursor-pointer text-2xl"></i>
          </h5>
          <h3 className="text-xl font-bold mb-2 text-[#1e0e4b] ml-3">
            Find a trip
          </h3>
          <form onSubmit={sumbitHandler}>
            <div className="relative mt-4">
              <input
                type="text"
                value={pickupLoca}
                onChange={(e)=>{setPickupLoca(e.target.value)}}
                onClick={()=>{setPanelOpen(true)}}
                placeholder="Add to pick-up location"
                className="w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="relative mt-4">
              <input
                type="text"
                value={destination}
                onChange={(e)=>{setDestination(e.target.value)}}
                onClick={()=>{setPanelOpen(true)}}
                placeholder="Enter your destination"
                className="w-full p-4 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </form>
        </div>
        <div ref={panelRref} className="bg-red-600 h-[] ">
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
