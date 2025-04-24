function ListaOrdenada({ lista }) {
  if (!lista || lista.length == 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <ol>
      {lista.map((objeto) => (
        <li key={objeto}> {objeto}</li>
      ))}
    </ol>
  );
}

export default ListaOrdenada;
