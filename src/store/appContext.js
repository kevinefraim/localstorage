import { createContext, useState, useEffect } from "react";
import App from "../App";

export const appContext = createContext(null);

const UserProvider = ({ children }) => {
  const listStorage = JSON.parse(localStorage.getItem("products"));
  const [productos, setProductos] = useState(listStorage ? listStorage : []);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productos));
  }, [productos]);

  return (
    <appContext.Provider value={{ productos, setProductos }}>
      {children}
    </appContext.Provider>
  );
};

export default UserProvider;
