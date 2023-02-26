import React from 'react'
import {  Route, Routes } from 'react-router-dom'

import Users from './components/User/User'

const AdminRoutes = () => {
     return (
          <>
               <Routes>
                   
             
                    <Route path='/users/' element={<Users />} />
                    {/* <Route path='/booking' element={<Orders />} /> */}

                    {/* <Route path='/add-product' element={<AddProduct />} />
                    <Route path='/products' element={<Products />} /> */}
               </Routes>
             
          </>
     )
}

export default AdminRoutes