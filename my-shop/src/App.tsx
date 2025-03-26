import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Payment from "./components/Payment";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/isOrdered" element={<Payment />} />
        <Route path="/productpage/:id" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
