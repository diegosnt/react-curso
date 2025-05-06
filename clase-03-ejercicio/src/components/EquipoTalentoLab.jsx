import React from "react";
import '../styles/Equipo.css'

function EquipoTalentoLab({ equipo }) {
  // Verificamos si el equipo es un array y tiene elementos
//   if (!Array.isArray(equipo) || equipo.length === 0) {
//     return <p>No hay miembros en el equipo para mostrar.</p>;
//   }

  return (

    /*
        {equipo.map((miembro) => (
        <div key={miembro.nombre} className="team-card"> 
    
    */
    <div className="team-conteiner">
      {equipo.map((miembro) => (
        <div key={miembro.nombre} className="team-card">
          <div>
            <h1>{miembro.nombre}</h1>
            <p>{miembro.rol}</p>
          </div>
          <div>
            <img className ="team-image" src={miembro.imagen} alt=""/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EquipoTalentoLab;
