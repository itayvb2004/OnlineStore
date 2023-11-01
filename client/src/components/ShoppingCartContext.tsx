import React, { useContext, createContext, useState, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';


interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface ShoppingCartContextValue {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
}

const ShoppingCartContext = createContext<ShoppingCartContextValue | undefined>(undefined);

interface ShoppingCartProviderProps {
  children: ReactNode;
}

const ShoppingCartProvider: React.FC<ShoppingCartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    // Generate a unique ID for the added item
    const newItem = { ...item, id: uuidv4() };
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
  };
  
  const removeFromCart = (itemId: string) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
  };
  
  const contextValue: ShoppingCartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
  }
  return context;
};

export { ShoppingCartProvider, useShoppingCart };
