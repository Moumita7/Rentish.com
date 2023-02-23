
import ProductListing from "./ProductListing"


import Payment from "./Pages/Payment/Payment"
import Navbar from "./component/Navbar/Navbar"


function App() {

  return (
    <div className="App">

      <h1>home</h1>
      <ProductListing />

    <Navbar/>
     <Payment/>

    </div>
  )
}

export default App
