import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Agregar from "./components/Agregar/Agregar";
import Navbar from "./components/Navbar/Navbar";
import Productos from "./components/Productos";
import "./App.css";

function App() {
  const listStorage = JSON.parse(localStorage.getItem("products"));
  const [productos, setProductos] = useState(listStorage ? listStorage : []);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(productos));
  }, [productos]);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Agregar productos={productos} setProductos={setProductos} />
          }
        />
        <Route
          path="/productos"
          element={
            <Productos productos={productos} setProductos={setProductos} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
