import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"
import NewArivals from "./components/NewArivals"


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
    </Router>
  )
}

export default App
