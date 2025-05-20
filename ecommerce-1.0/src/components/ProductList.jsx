import ProductCard from "./ProductCard";
import Carrito from "./Carrito";
import "../styles/Global.css";
import { useState } from "react"


import products from "../assets/data/products.json"; // Se importa el JSON

function ProductList() {
  console.table(products);

    const [productosCarrito, setProductosCarrito] = useState([]);


  return (
    <>
      <div className="product-conteiner">
        {products.map((product) => (
          <ProductCard key={product.nombre} product={product} />
        ))}
      </div>


      <Carrito
        productos={productosCarrito}

      />
    </>

  );
}

export default ProductList;
