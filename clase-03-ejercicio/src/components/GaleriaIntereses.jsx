import React from "react";
import "../styles/Temas.css";

function GaleriaIntereses({ temas }) {
  let color = "#393e46";

  //TODO  AJUSTES

  function cambiarColor() {
    console.log(color);
    if (color == "#393e46") {
      color = "#03A791";
      console.log(color);
    } else {
      color = "#393e46";
      console.log(color);
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
