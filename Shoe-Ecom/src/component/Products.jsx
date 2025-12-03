import React, { useContext, useState } from 'react';
import { StoreContext } from './StoreContext';
import ProductCard from './ProductCard';
import "./Products.css";
import Navbar from './Navbar';
import { FaFilter } from "react-icons/fa";
import { MdCancel } from "react-icons/md";



export default function Products() {
  const { products } = useContext(StoreContext);
  const [category, setCategory] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);

const rawCategories = Array.from(new Set(products.map(p => p.category.toLowerCase())));
const categories = ["all", ...rawCategories];

 
  

  const filteredProducts =
  category === "all"
    ? products
    : products.filter(p => p.category.toLowerCase() === category);

      

  return (
    <>
      <Navbar />
        <div className="layout">
         <button className="filter-toggle" onClick={() => setSidebarOpen(true)}>
  <FaFilter />
</button>

<div
  className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
  onClick={() => setSidebarOpen(false)}
></div>

<aside className={sidebarOpen ? "open" : ""}>
  <button className="close-btn" onClick={() => setSidebarOpen(false)}><MdCancel />
</button>
  <h1>Categories</h1>
  <ul>
    {categories.map(cat => (
      <li
        key={cat}
        className={category === cat ? "active" : ""}
        onClick={() => {
          setCategory(cat);
          setSidebarOpen(false);
        }}
      >
        {cat.charAt(0).toUpperCase() + cat.slice(1)}
      </li>
    ))}
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
