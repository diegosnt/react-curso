import React, { useState } from "react";
function Contador() {
  const [contador, setContador] = useState(0);
  const [palabra, setPalabra] = useState("hola");

  function cambioPalabra() {
    if (palabra == "hola") {
      setPalabra("adios");
    } else {
      setPalabra("hola");
    }
  }

  return (
    <div>
      <p>Valor del contador: {contador}</p>
      <p>Valor del contador: {palabra}</p>

      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        <br />
        <br />
      <button onClick={() => cambioPalabra()}>Saludo</button>
    </div>
  );
}
export default Contador;
