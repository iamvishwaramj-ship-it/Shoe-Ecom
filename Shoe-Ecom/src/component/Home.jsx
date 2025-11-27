import React from "react";
import "./Home.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

const products = [
  {
    id: 1,
    name: "Shoe 1",
    img: "https://themewagon.github.io/stylish/images/card-item1.jpg",
    description: "Running shoes for men",
    price: "$99",
  },
  {
    id: 2,
    name: "Shoe 2",
    img: "https://themewagon.github.io/stylish/images/card-item2.jpg",
    description: "Comfortable and durable",
    price: "$89",
  },
  {
    id: 3,
    name: "Shoe 3",
    img: "https://themewagon.github.io/stylish/images/card-item3.jpg",
    description: "Lightweight running shoes",
    price: "$120",
  },
  {
    id: 4,
    name: "Shoe 4",
    img: "https://themewagon.github.io/stylish/images/card-item4.jpg",
    description: "Premium quality",
    price: "$150",
  },
  {
    id: 5,
    name: "Shoe 5",
    img: "https://themewagon.github.io/stylish/images/card-item5.jpg",
    description: "Stylish & durable",
    price: "$110",
  },
];

export default function Home() {
  return (
    <>
     <Navbar/>
    <div>
      {/* Top Images */}
      <div className="f-row">
        <div className="card-image1">
          <img
            src="https://themewagon.github.io/stylish/images/card-image1.jpg"
            alt=""
          />
        </div>
        <div className="s-row">
          <div className="card-image2">
            <img
              src="https://themewagon.github.io/stylish/images/card-image3.jpg"
              alt=""
            />
          </div>
          <div className="card-image2">
            <img
              src="https://themewagon.github.io/stylish/images/card-image2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Discount Section */}
      <div className="discount">
        <div className="coupen">
          <h1>10% OFF Discount Coupons</h1>
          <p>Subscribe us to get 10% OFF on all the purchases</p>
        </div>

        <div className="btn-1">
          <button>Email Me</button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="product-header">
        <h2>FEATURED PRODUCTS</h2>
        <h3 className="view-all">VIEW ALL</h3>
      </div>

      {/* Product Cards */}
      <div className="product-container">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <h4>{item.price}</h4>
          </div>
        ))}
      </div>
      <div className="column-3">
        <div className="shoes-two">
          <img
            src="https://themewagon.github.io/stylish/images/collection-item1.jpg"
            alt=""
          />
        </div>
        <div className="shoes-two">
          <img
            src="https://themewagon.github.io/stylish/images/collection-item2.jpg"
            alt=""
          />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Info</h3>
            <p>Track Your Order</p>
            <p>Our Blog</p>
            <p>Privacy policy</p>
            <p>Shipping</p>
            <p>Contact Us</p>
            <p>Help</p>
            <p>Community</p>
          </div>

          <div className="footer-column">
            <h3>About</h3>
            <p>History</p>
            <p>Our Team</p>
            <p>Services</p>
            <p>Company</p>
            <p>Manufacture</p>
            <p>Wholesale</p>
            <p>Retail</p>
          </div>

          <div className="footer-column">
            <h3>Women Shoes</h3>
            <p>Track Your Order</p>
            <p>Our Blog</p>
            <p>Privacy policy</p>
            <p>Shipping</p>
            <p>Contact Us</p>
            <p>Help</p>
            <p>Community</p>
          </div>

          <div className="footer-column">
            <h3>Popular</h3>
            <p>Prices Drop</p>
            <p>New Products</p>
            <p>Best Sales</p>
            <p>Stores</p>
            <p>Login</p>
            <p>Cart</p>
          </div>

          <div className="footer-column">
            <h3>Mens Collection</h3>
            <p>Delivery</p>
            <p>About Us</p>
            <p>Shoes</p>
            <p>Contact Us</p>
          </div>

          <div className="footer-column">
            <h3>Get In Touch</h3>
            <p>Stylish Online Store 123</p>
            <p>Main Street, Toulouse - France.</p>
            <p>Call us: (+33) 800 456 789-987</p>
            <p>
              <strong>contact@yourwebsite.com</strong>
            </p>
          </div>
        </div>

        <p className="footer-bottom">© Copyright Stylish 2023.</p>

        <p className="footer-credit">
          Free HTML by <span>TemplatesJungle</span> Distributed by{" "}
          <span>ThemeWagon</span>
        </p>
      </footer>
    </div>
     </>
  );
}
