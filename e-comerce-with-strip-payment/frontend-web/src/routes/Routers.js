import React from 'react'
import { useSelector } from 'react-redux'

import {Routes, Route, Navigate} from 'react-router-dom'
import {
  LoginScreen,
  RegisterScreen,
  Home,
  ResetPassword,
  ForgotPassword,
  Cart,
  OrderHistory
} from '../pages'

const Routers = ()=>{
const {auth} = useSelector(state=>state)

  return <Routes>
  <Route path="/register" element={<RegisterScreen/>} />
  <Route path="/login" element={ <LoginScreen />} />
  <Route path="/reset-password" element={ <ResetPassword />} />
  <Route path="/forgotpassword" element={ <ForgotPassword />} />
  <Route path="/home" element={<Home/>} />
  <Route path="/cart" element={auth.token ? <Cart/> : <Navigate to="/login"/>} />
  <Route path="/order" element={auth.token ? <OrderHistory/> : <Navigate to="/login"/>} />
  

  <Route path="/" element={<Navigate to="/home"/>} />
    </Routes>
}

export default Routers
