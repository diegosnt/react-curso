import React from "react";
import "../styles/Proyecto.css";

function TarjetaProyecto({ titulo, descripcion, botonTexto }) {
 
  function mensajeConsola(){
    console.log(`Explorando: ${titulo}`);
  }

  return (
    <div className="proyecto-card">
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      <button className="proyecto-button" onClick={mensajeConsola}>{botonTexto}</button>
    </div>
  );
}

export default TarjetaProyecto;