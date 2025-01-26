import React, { useState } from 'react'
import { createContext } from 'react'

export const userDataContext = createContext()
const UserContext = ({children}) => {
  const [user, setUser] = useState({
    email:"",
    fullname:"",
    username:"",
    password:""
  })
  return (
    <div>
      <userDataContext.Provider value={{user,setUser}}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext  