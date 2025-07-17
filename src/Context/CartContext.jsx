import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContext;
