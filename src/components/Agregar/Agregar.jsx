import "./Agregar.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Agregar = ({ productos, setProductos }) => {
  const [nameProduct, setNameProduct] = useState("");
  const [cantProduct, setCantProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");

  const addProduct = (e) => {
    e.preventDefault();
    if (nameProduct === "" || cantProduct === "" || priceProduct === "") return;
    setProductos([
      {
        name: nameProduct,
        quantity: cantProduct,
        price: priceProduct,
        id: new Date().getTime(),
      },
      ...productos,
    ]);
  };

  return (
    <div className="container mt-4">
      <h2>Agregar producto</h2>

      <form onSubmit={addProduct}>
        <div className="mb-3">
          <label className="form-label">Nombre del producto</label>
          <input
            type="text"
            pattern="[a-zA-Z]*"
            className="form-control"
            onChange={(e) => setNameProduct(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad</label>
          <input
            type="number"
            min={0}
            className="form-control"
            onChange={(e) => setCantProduct(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            min={0}
            className="form-control"
            onChange={(e) => setPriceProduct(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default Agregar;
