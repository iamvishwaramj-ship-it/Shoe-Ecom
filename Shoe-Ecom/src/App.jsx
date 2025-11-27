import { useState } from "react";
import Nav from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import StoreProvider from "./component/StoreContext";
import Cart from "./component/Cart";
import ProductDetails from "./component/Productdetails";
import Contact from "./component/Contact";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        {/* <Nav />
      <Home /> */}
        {/* <About /> */}
        <Contact />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
