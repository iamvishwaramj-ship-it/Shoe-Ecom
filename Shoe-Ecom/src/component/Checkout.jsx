import React, { useContext, useState } from "react";
import { StoreContext } from "./StoreContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

export default function Checkout() {
  const { cart } = useContext(StoreContext);
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <div className="checkout-wrapper">
        <main className="container">
          <h1 className="page-title">Checkout</h1>

          {orderPlaced && (
            <Stack >
              <Alert variant="filled" severity="success">
                <AlertTitle>Success</AlertTitle>
                 Your order has been placed successfully!
              </Alert>
            </Stack>
          )}

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="checkout-content">
              <div className="checkout-form">
                <h2>Shipping Details</h2>
                <form onSubmit={handleSubmit}>
                  <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                  <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                  <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
                  <input type="text" name="city" placeholder="City" onChange={handleChange} required />
                  <input type="text" name="pin" placeholder="Pin Code" onChange={handleChange} required />

                  <button type="submit" className="place-order-btn">
                    Place Order (₹{total})
                  </button>
                </form>
              </div>

              <div className="checkout-summary">
                <h2>Order Summary</h2>
                {cart.map((item) => (
                  <div key={item.id} className="summary-item">
                    <span>{item.name} x {item.qty}</span>
                    <span>₹{item.price * item.qty}</span>
                  </div>
                ))}
                <hr />
                <h3>Total: ₹{total}</h3>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
