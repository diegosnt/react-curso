import "../styles/Global.css";

function CarritoCard({ producto, funcionDisparadora }) {
  function borrarDelCarrito() {
    funcionDisparadora(producto.id);
  }

  return (
    <div className="carrito-card">
      <h3 className="carrito-producto" style={{ color: "black" }}>
        {producto.name}
      </h3>
      {
        <p className="descripcion-carrito" style={{ color: "black" }}>
          {producto.description}
        </p>
      }
      <img className="carrito-image" src={producto.imagen}></img>
      <span style={{ color: "black" }}>{producto.cantidad}</span>
      <div className="carrito-unitario">
        <span style={{ color: "black" }}>$ {producto.price}</span>
      </div>
      <div className="carrito-sub">
        <span style={{ color: "black" }}>
          $ {(producto.cantidad * producto.price).toFixed(2)}
        </span>
      </div>
      <button className="boton-carrito" onClick={borrarDelCarrito}>
        X
      </button>
    </div>
  );
}

export default CarritoCard;
