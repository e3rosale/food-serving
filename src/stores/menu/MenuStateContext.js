import { createContext, useContext, useReducer } from "react";
import { menuReducer } from "./MenuReducer";
import { menuInitialState } from "./MenuInitialState";

const MenuContext = createContext();

export const MenuStateProvider = ({ children }) => {
  return (
    <MenuContext.Provider value={useReducer(menuReducer, menuInitialState)}>
      {children}
    </MenuContext.Provider>
  );
}

export const useMenuState = () => {
  const menuState = useContext(MenuContext);

  if (menuState === undefined) {
    throw new Error('useMenuState must be used within an MenuStateProvider.');
  }

  return menuState;
}