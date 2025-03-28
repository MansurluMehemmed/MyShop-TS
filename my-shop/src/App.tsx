import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Payment from "./Pages/Payment";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import FavoriProducts from "./Pages/FavoriProducts";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/isOrdered" element={<Payment />} />
        <Route path="/productpage/:id" element={<ProductsPage />} />
        <Route path="/favorites" element={<FavoriProducts />} />
      </Routes>
    </>
  );
}

export default App;
