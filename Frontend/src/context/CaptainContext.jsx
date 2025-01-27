import React, { createContext, useState } from "react";

export const captainDataContext = createContext();
const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null)
    const[isLoading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const updateCaptain = (captainData) =>{
        setCaptain(captainData)
    }

    const value ={
        captain,
        setCaptain,
        isLoading,
        setLoading,
        error,
        setError
    }
  return (
    <div>
      <captainDataContext.Provider value={value}>
        {children}
        </captainDataContext.Provider>
    </div>
  );
};

export default CaptainContext;
