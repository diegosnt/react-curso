import BotonPrueba from "./BotonPrueba";

function Tarjeta({ titulo, descripcion, botonTexto }) {
  const estilo = {
    background: "#F5C45E",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
    width: "300px",
    fontFamily: "monospace",
    color: "#102E50",
    margin: "10px",
  };
  return (
    <div style={estilo}>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
      <BotonPrueba texto={botonTexto} color="#BE3D2A" />
    </div>
  );
}
export default Tarjeta;
