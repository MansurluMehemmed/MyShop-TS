import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Payment from "./components/Payment";
import Slider from "./components/Slider";
import NewArivals from "./components/NewArivals";
import Footer from "./components/Footer";

function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
          <Slider />
          <NewArivals />
          <Footer />
        </div>
        } />
        <Route path="/isOrdered" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
