import React from 'react';
import "../styles/Global.css"; // Si necesitas estilos globales

function CarritoCard({ producto }) {
  return (
    <div className="carrito-item" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', backgroundColor: 'white' }}>
      <h4>{producto.nombre}</h4>
      <p>Precio: {producto.precio} $</p>
      {/* Aquí podrías añadir una imagen o un botón para eliminar del carrito si lo deseas */}
    </div>
  );
}

export default CarritoCard;