import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Agregar from "./components/Agregar/Agregar";
import Navbar from "./components/Navbar/Navbar";
import Productos from "./components/Productos";
import "./App.css";
import UserProvider from "./store/appContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Agregar />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
