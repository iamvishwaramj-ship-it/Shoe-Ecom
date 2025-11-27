import React, { useContext } from 'react';
import { StoreContext } from './StoreContext';
import "./ProductCard.css"
import { Link } from "react-router-dom";


export default function ProductCard({ product }){
  const { addToCart } = useContext(StoreContext);
  return (
<div className="product-card">
            <Link to={`/product/${product.id}`}>
<img src={product.image} alt={product.title} />
</Link>
      <h1>{product.title}</h1>
      <p className="small-muted">{product.name}</p>
      <h4>₹{product.price}</h4>
      <h4 className='h3'>Rating:{product.rating}</h4>
      <button onClick={()=>addToCart(product)}>Add to Cart</button>
    </div>
  );
}
