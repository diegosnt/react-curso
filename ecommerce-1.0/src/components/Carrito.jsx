import { useState } from "react";
import "../styles/Global.css";
import ProductCard from "./ProductCard";

export default function Carrito({ productos }) {

    return (

        <div>
            {productos.length > 0 ? productos.map((producto) => (
                <div className="carrito-conteiner">
                    <CarritoCard
                        producto={producto}
                    />
                </div>
            ))
                :
                <div>
                    <p className="carrito-vacio">Carrito vacio</p>

                </div>
            }

        </div>


    )

}