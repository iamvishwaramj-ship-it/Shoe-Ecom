import { useState } from "react";
import Nav from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import StoreProvider from "./component/StoreContext";
import Cart from "./component/Cart";
import ProductDetails from "./component/ProductDetails";
import Contact from "./component/Contact";
import About from "./component/About";
import Login from "./component/Login";
import Checkout from "./component/Checkout";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/checkout" element={<Checkout />} />

         
        </Routes>
       
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
