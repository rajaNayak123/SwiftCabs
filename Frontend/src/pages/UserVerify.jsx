import React,{useEffect, useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../context/UserContext";
import axios from "axios";
const UserVerify = ({ children }) => {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const {user, setUser} = useContext(userDataContext)
  const [isLoading, setLoading] = useState(true);

 useEffect(()=>{
    if(!token){
        navigate('/login')
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
      if(response.status == 200){
        setUser(response.data)
        setLoading(false)
      }
    }).catch((err)=>{
      console.log(err);
      localStorage.removeItem('token')
      navigate("/login")
    })

 },[token])

  if(isLoading){
      return(
        <div>Loading ...</div>
      )
  }
  return( 
  <>{children}</>
  );
};

export default UserVerify;
