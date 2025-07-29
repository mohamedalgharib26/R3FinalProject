import { createContext, useEffect, useState } from "react";

export const cartContext = createContext();

function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const remove = (item) => {
    const removeditems = cart.filter((el) => el.id != item.id);
    setCart([...removeditems]);
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        remove,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default CartContext;
