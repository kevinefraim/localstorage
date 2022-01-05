import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Productos.css";

const Agregar = ({ productos, setProductos }) => {
  const removeItem = (id) => {
    setProductos(productos.filter((producto) => producto.id != id));
  };
  const removeAll = () => {
    setProductos([]);
  };

  const productsTotal = productos.reduce(
    (price, product) => price + product.price * product.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Productos</h2>
      <Link to="/">
        <button className="btn btn-success me-3">Agregar +</button>
      </Link>
      <button className="btn btn-danger" onClick={removeAll}>
        Eliminar todo
      </button>
      {productos.length > 0 && (
        <div className="mt-3">
          <h3>Total: {productsTotal}</h3>
        </div>
      )}

      <div className="row border-top border-bottom mt-4 p-2">
        <div className="col-2 fw-bolder">#</div>
        <div className="col-3 fw-bolder">Nombre del producto</div>
        <div className="col-2 fw-bolder">Cantidad</div>
        <div className="col-2 fw-bolder">Precio</div>
        <div className="col-2 fw-bolder">Subtotal</div>
        <div className="col-1 fw-bolder">Acción</div>
      </div>
      {productos.map((item) => (
        <div className="row border-top border-bottom mt-4 p-2" key={item.id}>
          <div className="col-2 fw-bolder">{item.id}</div>
          <div className="col-3 fw-bolder">{item.name}</div>
          <div className="col-2 fw-bolder">{item.quantity}</div>
          <div className="col-2 fw-bolder">{item.price}</div>
          <div className="col-2 fw-bolder">{item.price * item.quantity}</div>
          <div className="col-1 fw-bolder">
            <button
              className="btn btn-danger"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Agregar;
