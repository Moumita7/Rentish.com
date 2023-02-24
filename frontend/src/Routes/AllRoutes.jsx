import {Routes, Route} from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home/Home";
import Location from "../Pages/Home/Location";
import Calender from "../Pages/Home/Calender";

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route  path="/"  element={<Home/>} />
            <Route  path="/location"  element={<Location/>} />
            <Route  path="/calender"  element={<Calender/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes