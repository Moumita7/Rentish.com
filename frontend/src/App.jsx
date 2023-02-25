import Payment from "./Pages/Payment/Payment"
import Profile from "./Pages/Profile/Profile"

import ProductListing from "./Products Pages/ProductListing"


import Navbar from "./component/Navbar/Navbar"
import AllRoutes from "./Routes/AllRoutes"
function App() {

  return (
    <div className="App">

     {/* <Payment/> */}
     <Profile/>

  <Navbar/>
    <AllRoutes />

    </div>
  )
}

export default App
