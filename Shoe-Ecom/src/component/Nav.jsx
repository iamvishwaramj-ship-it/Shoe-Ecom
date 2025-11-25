import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <div>
      <nav className="nav-bar">
        <h2>Stylish Online Store</h2>
        <div className="nav-items">
          <label for="fruit-select"></label>
          <select name="fruits" id="fruit-select">
            <option value="grape" selected className="drop-down">
              Home
            </option>
            <option value="apple">Home 1</option>
            <option value="banana">Home 2</option>
          </select>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Page</a>
          <a href="#">Shop</a>
          <a href="#">Sale</a>
        </div>
      </nav>
    </div>
  );
}
