import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./CartReducer";
import { cartInitialState } from "./CartInitialState";

const CartContext = createContext();

export const CartStateProvider = ({ children }) => {
  return (
    <CartContext.Provider value={useReducer(cartReducer, cartInitialState)}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartState = () => {
  const cartState = useContext(CartContext);

  if (cartState === undefined) {
    throw new Error('useCartState must be used within an CartStateProvider.');
  }

  return cartState;
}

