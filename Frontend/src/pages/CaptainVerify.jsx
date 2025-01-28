import React, { useContext, useEffect, useState } from "react";
import { captainDataContext } from "../context/CaptainContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CaptainVerify = ({ children }) => {
  const token = localStorage.getItem("token");
  const { captain, setCaptain } = useContext(captainDataContext);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          setCaptain(response.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/captain-login");
      });
  }, [token]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return <div>{children}</div>;
};

export default CaptainVerify;
