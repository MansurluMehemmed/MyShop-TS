import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Payment from "./Pages/Cart";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import FavoriProducts from "./Pages/FavoriProducts";
import OrderShare from "./Pages/OrderShare";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/isOrdered" element={<Payment />} />
        <Route path="/productpage/:id" element={<ProductsPage />} />
        <Route path="/favorites" element={<FavoriProducts />} />
        <Route path="/delivery" element={<OrderShare />} />
      </Routes>
    </>
  );
}

export default App;
