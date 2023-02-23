import {Routes, Route} from "react-router-dom";
import React from 'react'
import Home from "./Home";
import Location from "./Location";

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route  path="/"  element={<Home/>} />
            <Route  path="/location"  element={<Location/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes