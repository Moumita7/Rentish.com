import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/Home/Home";
import Location from "../pages/Home/Location";
import Calender from "../pages/Home/Calender"
// import Admin from "../Pages/Admin/Admin";
// import Home from "../Pages/Home/Home";
import Payment from "../pages/Payment/Payment";

import Profile from "../Pages/Profile/Profile";

import ProductDetails from "../ProductDetails Page/ProductDetails";
import ProductListing from "../ProductsListing Page/ProductListing";
<<<<<<< HEAD
import Result from "../pages/Home/Result";
// import Profile from "../Pages/Profile/Profile";
=======

>>>>>>> 1ffd7d25e446f968688d7e3264701f83be262caf


export default function AllRoutes() {
  return (
    <div>
      <Routes>

       <Route  path="/"  element={<Home/>} />

        <Route  path="/location"  element={<Location/>} />

            <Route  path="/location"  element={<Location/>} />
            <Route  path="/calender"  element={<Calender/>} />
            

        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />

        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route
          path="/payment"
          element={<PrivateRoutes> {<Payment />}</PrivateRoutes>}
        /> */}
        <Route path="/payment" element={<Payment />} />

        {/* <Route path="/admin" element={<Admin />} /> */}
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route

        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/details" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/result" element={<Result />} />


        {/* <Route

          path="/profile"
          element={ <Profile/>}
        />
        <Route path="/*" element={<> 404 Not Found... </>} />
      </Routes>
    </div>
  );
}
