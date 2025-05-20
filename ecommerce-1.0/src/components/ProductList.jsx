import ProductCard from "./ProductCard";
import "../styles/Global.css";

import products from "../assets/data/products.json"; // Se importa el JSON

function ProductList() {
  console.table(products);

  return (
    <div className="product-conteiner">
      {products.map((product) => (
        <ProductCard key={product.nombre}  product={product} />
      ))}
    </div>
  );
}

export default ProductList;
