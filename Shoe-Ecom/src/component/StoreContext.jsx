import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const StoreContext = createContext();

export default function StoreProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/aa113043-bef8-4aeb-b030-412472fe0431")
      .then(res => {
        const data = res.data;
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          setProducts([]);
        }
      })
      .catch(() => setProducts([]));
  }, []);

  function addToCart(item) {
    setCart(prev => {
      const found = prev.find(p => p.id === item.id);
      if (found) {
        return prev.map(p =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(p => p.id !== id));
  }

  function changeQty(id, qty) {
    setCart(prev => prev.map(p => p.id === id ? { ...p, qty } : p));
  }

  function login(email) {
    setUser({ email });
  }

  function logout() {
    setUser(null);
  }

  return (
    <StoreContext.Provider
      value={{
        products,
        cart,
        user,
        addToCart,
        removeFromCart,
        changeQty,
        login,
        logout
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
