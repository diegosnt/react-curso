import React from 'react';
import '../styles/Global.css';

function Nav() {
    return (
        <nav className="nav"> {/* Aplica la clase 'nav' */}
            <ul className="navList"> {/* Aplica la clase 'navList' */}
                <li><a href="#" className="navLink">Inicio</a></li> {/* Aplica la clase 'navLink' */}
                <li><a href="#" className="navLink">Acerca de</a></li>
                <li><a href="#" className="navLink">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
