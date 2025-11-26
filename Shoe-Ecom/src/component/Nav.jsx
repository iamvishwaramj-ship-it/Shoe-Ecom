import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import "./Nav.css";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <span style={{ color: "red" }}>Stylish</span>Shoes
        </Link>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={mobileMenuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
            Men
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
            Women
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
            Offer
          </Link>
        </li>
      </ul>

      <div className="nav-icons">
        <FaSearch className="icon" />
        <Link to="/account">
          <FaUser className="icon" />
        </Link>
        <Link to="/cart">
          <FaShoppingCart className="icon" />
        </Link>
      </div>
    </nav>
  );
}
