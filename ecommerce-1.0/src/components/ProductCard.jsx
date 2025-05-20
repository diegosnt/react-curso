import React from "react";
import "../styles/Global.css";


function ProductCard({ product }) {



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
        </div>
    </>
  );
}

export default ProductCard;
