import "./Agregar.css";
import { useContext, useState } from "react";
import { appContext } from "../../store/appContext";

const Agregar = () => {
  const { productos, setProductos } = useContext(appContext);
  const [nameProduct, setNameProduct] = useState("");
  const [cantProduct, setCantProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");

  //Funcion onSubmit de productos
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
    setNameProduct("");
    setCantProduct("");
    setPriceProduct("");
  };

  return (
    <div className="container mt-4">
      <h2>Agregar producto</h2>

      <form onSubmit={addProduct}>
        <div className="mb-3">
          <label className="form-label">Nombre del producto</label>
          <input
            type="text"
            value={nameProduct}
            pattern="[a-zA-Z]*"
            className="form-control"
            onChange={(e) => setNameProduct(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad</label>
          <input
            type="number"
            value={cantProduct}
            min={0}
            className="form-control"
            onChange={(e) => setCantProduct(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            value={priceProduct}
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
