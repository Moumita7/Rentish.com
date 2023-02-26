
import Navbar from "./component/Navbar/Navbar"
import Checkout from "./Pages/Checkout/Checkout";
import AllRoutes from "./Routes/AllRoutes"

import Navbar from "./component/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";



function App() {
  return (
    <div className="App">

      {/* <Navbar /> */}
      {/* <AllRoutes /> */}
      <Checkout/>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
