function BotonPrueba({ texto, color }) {
    const estilo = { backgroundColor: color, color: 'white', padding:
    '10px', border: 'none', margin: '5px' };
    return <button style={estilo}>{texto}</button>;
    }

    export default BotonPrueba;