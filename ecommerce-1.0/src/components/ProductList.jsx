import ProductCard from "./ProductCard";
//import Carrito from "./Carrito";
import "../styles/Global.css";
import { useState } from "react";

import products from "../assets/data/products.json"; // Se importa el JSON

function ProductList() {
  console.table(products);

  const [productosCarrito, setProductosCarrito] = useState([]);

  function funcionCarrito(product) {
    console.log("PASO 2");
   
    var nuevoCarrito = productosCarrito;
    nuevoCarrito.push(product);
    setProductosCarrito(nuevoCarrito);
    console.table(productosCarrito);
  }

  return (
    <>
      <div className="product-conteiner">
        {products.map((product) => (
          <ProductCard 
          key={product.nombre} 
          product={product} 
          funcionCarrito={funcionCarrito}

          />
        ))}import "../styles/Global.css";
      </div>

      <Carrito productos={productosCarrito} />
    </>
  );
}




//import ProductCard from "./ProductCard";

function Carrito({ productos }) {
    const [productosCarrito, setProductosCarrito] = useState(productos);
    return (
        <div>
            {console.log(productos.length)}
            {productos.length > 0 ? productos.map((producto) => (
                <div className="carrito-conteiner">
                    <CarritoCard
                        producto={producto}
                    />
                </div>
            )):
                <div>
                    <p className="carrito-vacio">Carrito vacio</p>                    
                </div>
            }
        </div>
    )
}








export default ProductList;
