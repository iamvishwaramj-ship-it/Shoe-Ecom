import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "./StoreContext";
import "./Cart.css"
import { useEffect } from "react";
import Navbar from "./Navbar";

export default function Cart() {
  const { cart, removeFromCart, changeQty } = useContext(StoreContext);
  const navigate = useNavigate();
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/Products"); 
    }
  }, [cart, navigate]);


  return (
  <>
  <Navbar/>
    <div className="cart-wrapper">
      <main className="container">
        <h1 className="page-title">Your Cart</h1>
        {cart.length === 0 && <p>No items in cart</p>}
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} width={90} />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: "0 0 6px" }}>{item.title}</h3>
              <p className="small-muted">₹{item.price}</p>
              <div className="product-count" >
                <input
                  className="input"
                  type="number"
                  value={item.qty}
                  min={1}
                  onChange={(e) =>
                    changeQty(item.id, Math.max(1, Number(e.target.value)))
                  }
                />
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
            <div>
              <h4>₹{item.price * item.qty}</h4>
            </div>
          </div>
        ))}

        {cart.length > 0 && (
          <div style={{ marginTop: 20, textAlign: "left" }}>
            <h2>Total: ₹{total}</h2>
            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >Proceed to Checkout</button>
          </div>
        )}
      </main>
    </div>
    </>
  );
}
