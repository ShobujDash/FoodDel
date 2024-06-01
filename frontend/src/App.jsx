import React, {useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import LoginPopup from "./components/loginPopUp/LoginPopup";

function App() {

  const [showLogin,setShowLogin] = useState()

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin } />:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin } />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
