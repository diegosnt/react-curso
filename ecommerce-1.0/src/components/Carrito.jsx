import { useState } from "react";
import "../styles/Global.css";
import ProductCard from "./ProductCard";
import CarritoCard from "./CarritoCard";


export default function Carrito({ productos }) {
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