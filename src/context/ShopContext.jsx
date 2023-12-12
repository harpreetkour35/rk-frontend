import { createContext } from "react";
import { productsData } from "../data/products";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const contextValue = productsData;

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
