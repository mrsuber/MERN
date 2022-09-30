import React from 'react'

import {Routes, Route, Navigate} from 'react-router-dom'
import {
  LoginScreen,
  RegisterScreen,
  Home,
  ResetPassword,
  ForgotPassword,
  Contact,
  Checkout,
  Cart,
  AllItems,
  ItemsDetails
} from '../pages'

const Routers = ()=>{


  return <Routes>
  <Route path="/register" element={<RegisterScreen/>} />
  <Route path="/login" element={ <LoginScreen />} />
  <Route path="/reset-password" element={ <ResetPassword />} />
  <Route path="/forgotpassword" element={ <ForgotPassword />} />
  <Route path="/home" element={<Home/>} />
 


  <Route path="/" element={<Navigate to="/home"/>} />
    </Routes>
}

export default Routers
