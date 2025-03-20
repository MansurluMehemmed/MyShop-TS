import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"
import NewArivals from "./components/NewArivals"
import BestSellers from "./components/BestSellers/BestSellers"
import Footer from "./components/Footer"


function App() {
  
  return (
    <Router>
        <div>
          <Navbar/>
        </div>
        <div>
          <Slider/>
        </div>
        <NewArivals/>
        {/* <BestSellers/> */}
        <Footer/>
    </Router>
  )
}

export default App
