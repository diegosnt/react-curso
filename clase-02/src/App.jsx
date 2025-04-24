import { useState } from "react";
import "./App.css";
import ListaUsuarios from "./components/ListaUsuarios";
import BotonPrueba from "./components/BotonPrueba";
import ListaOrdenada from "./components/ListaOrdenada";
import Tarjeta from "./components/Tarjeta";


function App() {
  const [count, setCount] = useState(0);
  const productos = ['Manzanas', 'Peras', 'Naranjas'];

  return (
    <>
      <ListaUsuarios />

      <div>
        <BotonPrueba texto="Aceptar" color="green" />
        <BotonPrueba texto="Cancelar" color="red" />
      </div>

      <ListaOrdenada lista={productos} />

      <Tarjeta 
        titulo="Tarjeta 1"
        descripcion="Descripción de la tarjeta 1" 
        botonTexto = "Soy el Boton">
      </Tarjeta>

    </>
  );
}

export default App;
