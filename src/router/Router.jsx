import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import LogIn from '../pages/login/LogIn'
import Sell from '../pages/sell/Sell'
import Display from '../pages/Display/Display'

function Router() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />  
            <Route path="/login" element={<LogIn />} />  
            <Route path="/sell" element={<Sell />} />  
            <Route path="/display" element={<Display />} />  
        </Routes>
    </div>
  )
}

export default Router