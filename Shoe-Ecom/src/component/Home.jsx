import React from "react";
import "./Home.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div>
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

        <div className="discount">
          <div className="coupen">
            <h1>10% OFF Discount Coupons</h1>
            <p>Subscribe us to get 10% OFF on all the purchases</p>
          </div>

          <div className="btn-1">
            <button>Email Me</button>
          </div>
        </div>

        <div className="product-header">
          <h2>FEATURED PRODUCTS</h2>
          <h3 className="view-all">VIEW ALL</h3>
        </div>
        <div className="shoe-1">
          <img
            src="https://themewagon.github.io/stylish/images/card-item1.jpg"
            alt=""
          />
          <img
            src="https://themewagon.github.io/stylish/images/card-item2.jpg"
            alt=""
          />
          <img
            src="https://themewagon.github.io/stylish/images/card-item3.jpg"
            alt=""
          />
          <img
            src="https://themewagon.github.io/stylish/images/card-item4.jpg"
            alt=""
          />
          <img
            src="https://themewagon.github.io/stylish/images/card-item5.jpg"
            alt=""
          />
        </div>

        {/* COLUMN SECTION FIXED HERE */}
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
              <p>Stylish Online Store</p>
              <p>Main Street, Toulouse - France.</p>
              <p>Call us: (+33) 800 456 789-987</p>
              <p>
                <strong>stylish online store.com</strong>
              </p>
            </div>
          </div>

          <p className="footer-bottom">Copyright Stylish 2025.</p>

          <p className="footer-credit">
            Free HTML by <span>TemplatesJungle</span> Distributed by{" "}
            <span>ThemeWagon</span>
          </p>
        </footer>
      </div>
    </>
  );
}
