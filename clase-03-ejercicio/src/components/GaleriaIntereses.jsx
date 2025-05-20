import React, { useState } from "react";
import "../styles/Temas.css";

function GaleriaIntereses({ temas }) {
  const [color, setColor] = useState("#393e46");

  function cambiarColor() {
    if (color == "#393e46") {
      setColor("#03A791");

    } else {
      setColor("#393e46");
    }
    
  }

  return (
    <div className="temas-container">
      {temas.map((tema) => (
        <button
          style={{ backgroundColor: color }}
          onClick={cambiarColor}
          className="temas-button"
        >
          {tema}
        </button>
      ))}
    </div>
  );
}

export default GaleriaIntereses;
