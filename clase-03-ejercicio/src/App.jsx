//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import equipo from "./data/equipo.json"; // Importamos el JSON
import "./App.css";
import EquipoTalentoLab from "./components/EquipoTalentoLab";
import TarjetaProyecto from "./components/TarjetaProyecto";
import GaleriaIntereses from "./components/GaleriaIntereses";

function App() {
  console.table(equipo);
  const intereses = ['React', 'JavaScript', 'APIs', 'Diseño UX',
    'Node.js'];

  return (
    <>
      <EquipoTalentoLab equipo={equipo} />
      <TarjetaProyecto
          titulo="Plataforma de Gestión"
          descripcion="Una herramienta para optimizar la gestión de equipos."
          botonTexto="Explorar proyecto"
      />
      <GaleriaIntereses
        temas={intereses}
      />
    </>
  );
}

export default App;
