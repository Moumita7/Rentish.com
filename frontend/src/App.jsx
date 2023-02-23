
// import ProductListing from "./ProductListing"


// import Payment from "./Pages/Payment/Payment"
import Navbar from "./component/Navbar/Navbar"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import AllRoutes from "./Routes/AllRoutes"


function App() {

  return (
    <div className="App">

      {/* <h1>home</h1> */}
      {/* <ProductListing /> */}

    <Navbar/>
   
  
    <AllRoutes />
     {/* <Payment/> */}

    </div>
  )
}

export default App
