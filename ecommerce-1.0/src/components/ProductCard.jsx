import React from "react";
import "../styles/Global.css";


function ProductCard({ product, funcionCarrito }) {

  function agregarAlCarrito() {
    console.log("PASO 1");
    funcionCarrito(product);
  }


  /*
    function agregarAlCarrito(producto) {
    nuevoCarrito = productosCarrito;
    nuevoCarrito.push(producto);
    setProductosCarrito(nuevoCarrito);
  }
  */


  return (

    <>
        <div key={product.nombre} className="product-card">
          <div>
            <h1>{product.nombre}</h1>
            <p>{product.descripcion}</p>
          </div>
          <div>
            <img className ="product-image" src={product.imagen} alt=""/>
          </div>
          <div>
            <p>{product.precio} $</p>
          </div>
          <button onClick={agregarAlCarrito} style={{color:"black"}}>Agregar al carrito</button>
        </div>
    </>
  );
}

export default ProductCard;
