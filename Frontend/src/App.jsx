import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx';
import UserLogin from './pages/UserLogin.jsx';
import UserSignup from './pages/UserSignup.jsx';
import CaptainLogin from './pages/CaptainLogin.jsx';
import CaptainSignup from './pages/CaptainSignup.jsx';
import Captuser from './pages/Captuser.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import UserVerify from './pages/UserVerify.jsx';
import UserLogout from './pages/UserLogout.jsx';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user-dashboard' element={<UserVerify><UserDashboard/></UserVerify>}/>
        <Route path='/user-or-captain' element={<Captuser/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>

        <Route path='/user/logout'
          element={<UserVerify>
            <UserLogout />
          </UserVerify>
          } />
      </Routes>
    </div>
  ) 
}

export default App