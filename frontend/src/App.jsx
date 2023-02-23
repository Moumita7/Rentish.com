

import ProductListing from "./ProductListing"


import Payment from "./Pages/Payment/Payment"
import Navbar from "./component/Navbar/Navbar"


import Payment from "./Pages/Payment/Payment"
import AllRoutes from "./Routes/AllRoutes"
function App() {

  return (
    <div className="App">

     <AllRoutes/>


      <h1>home</h1>
      <ProductListing />

    <Navbar/>
     <Payment/>


    </div>
  )
}

export default App
