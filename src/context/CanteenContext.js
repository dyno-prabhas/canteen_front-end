import React, { createContext, useState, useEffect } from 'react';


export const CanteenContext = createContext();

export const CanteenContextProvider = ({ children }) => {
 
  const [canteenItems, setCanteenItems] = useState(() => {
    const storedItems = localStorage.getItem('canteenItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });

  
  useEffect(() => {
    localStorage.setItem('canteenItems', JSON.stringify(canteenItems));
  }, [canteenItems]);

  
  const addItemToCart = (item) => {
    setCanteenItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const incrementItem = (id) => {
    setCanteenItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementItem = (id) => {
    setCanteenItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  
  const removeItemFromCart = (id) => {
    setCanteenItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== id));
  };

  
  const clearCart = () => {
    setCanteenItems([]);
  };

  return (
    <CanteenContext.Provider value={{ canteenItems, addItemToCart, removeItemFromCart, clearCart, incrementItem, decrementItem }}>
      {children}
    </CanteenContext.Provider>
  );
};
