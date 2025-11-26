import { useState } from "react";
import Nav from "./component/Nav";
import Home from "./component/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1></h1>} />
        <Route path="/men" element={<h1></h1>} />
        <Route path="/women" element={<h1></h1>} />
        <Route path="/offer" element={<h1></h1>} />
      </Routes>
      <Nav />
      <Home />
    </BrowserRouter>
  );
}

export default App;
