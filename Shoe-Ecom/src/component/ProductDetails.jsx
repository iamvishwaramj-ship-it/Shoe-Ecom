import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "./StoreContext";
import "./ProductDetails.css"

export default function ProductDetails() {
  const { id } = useParams();
  const { products, addToCart } = useContext(StoreContext);

  if (!Array.isArray(products)) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  const product = products.find(p => String(p.id) === String(id));

  if (!product) return <h2 style={{ textAlign: "center" }}>Product not found</h2>;

  return (
    <main className="details-container">
      <div className="details-img">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="details-info">
        <h1>{product.title}</h1>
        <h1 className="name">Name:{product.name}</h1>
        <h2 className="brand">Brand:{product.brand}</h2>
        <h1 className="category">{product.category}</h1>
        <h2 className="price">Price:₹{product.price}</h2>
        <h2 className="Rating">Rating:{product.rating}</h2>
        <p> Review:{product.reviewsCount}</p>
        <p className="desc">{product.description || "No description available."}</p>

        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </main>
  );
}
