import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"


function App() {
  
  return (
    <Router>
        <div>
          <Navbar/>
        </div>
        <div>
          <Slider/>
        </div>
    </Router>
  )
}

export default App
