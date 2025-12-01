import React, { useContext } from 'react';
import { StoreContext } from './StoreContext';
import "./ProductCard.css"
import { Link } from "react-router-dom";


export default function ProductCard({ product }){
  const { addToCart } = useContext(StoreContext);
  return (
<div className="product-card">
  <div className='img-box'>
<Link to={`/product/${product.id}`}>
<img src={product.image} alt={product.title} />
</Link></div>
      <h4 className="small-muted">{product.name}</h4>
      <h4 className='price'>₹{product.price}</h4>
      <h4 className='rating'>Rating:{product.rating}</h4>
      <button onClick={()=>addToCart(product)}>Add to Cart</button>
    
    </div>
  );
}
