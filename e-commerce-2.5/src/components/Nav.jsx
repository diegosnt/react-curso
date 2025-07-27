import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext, CarritoProvider } from "../contexts/CarritoContext";
import "../styles/Global.css";


function Nav({}) {

    const {productosCarrito} = useContext(CarritoContext)
    return ( 
        <nav className="nav">  
            <ul className="navList">  
                <li><Link to="/" className="navLink">Inicio</Link></li>  
                <li><Link to="/productos" className="navLink">Productos</Link></li>   
                <li><Link to="/nosotros" className="navLink">Nosotros</Link></li>  
                <li><Link to="/contacto" className="navLink">Contacto</Link></li>  
                <li><Link to="/carrito" className="navLink">Carrito {productosCarrito.length > 0 && <span className="cart-count">{productosCarrito.length}</span>}</Link></li> 
                <li><Link to="/admin" className="navLink">Admin</Link></li> 
                <li><Link to="/login" className="navLink">Login</Link></li>  
            </ul>
        </nav>
    );  
}


export default Nav; 