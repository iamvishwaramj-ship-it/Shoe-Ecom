import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import "./Nav.css";
import logo from "../assets/logo.png"; 
import Cart from "./Cart";
import { StoreContext } from "./StoreContext";


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useContext(StoreContext);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" /> {/* <-- correct usage */}
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="menu-icon"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Nav Links */}
      <ul className={mobileMenuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
            Product
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Icons */}
      <div className="nav-icons">
        <Link to="/login">
          <FaUser className="icon" />
        </Link>
        <Link to="/cart" >
          <FaShoppingCart className="icon"  />({cart.reduce((s,i)=>s+i.qty,0)})
        </Link>
        
      </div>
    </nav>
  );
}
