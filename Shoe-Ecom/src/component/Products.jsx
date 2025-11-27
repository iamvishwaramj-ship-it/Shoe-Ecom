import React, { useContext, useState } from 'react';
import { StoreContext } from './StoreContext';
import ProductCard from './ProductCard';
import "./Products.css";
import Navbar from './Navbar';

export default function Products() {
  const { products } = useContext(StoreContext);
  const [category, setCategory] = useState("all");


  const filteredProducts =
  category === "all"
    ? products
    : products.filter(p =>
        (p.category || "").toLowerCase().includes(category.toLowerCase())
      );

      

  return (
    <>
      <Navbar />
        <div className="layout">
      <aside>
        <h1>Categories</h1>
        <ul>
        <li className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>All Products</li>
        <li className={category === "men" ? "active" : ""} onClick={() => setCategory("men")}>Men</li>
        <li className={category === "women" ? "active" : ""} onClick={() => setCategory("women")}>Women</li>
        </ul>
       
      </aside>

      <main className="container">
        <h1 className="page-title">
          {category === "all"
            ? "All Shoes": category === "men"? "Men Shoes": "Women Shoes"}
           
        </h1>

        <div className="grid">
          {filteredProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </main>
      </div>
    </>
  );
}
