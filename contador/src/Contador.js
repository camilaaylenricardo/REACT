import React, { useState } from 'react';

function Contador() {
  // Definir el estado para el contador
  const [contador, setContador] = useState(0);

  // Funciones para incrementar y decrementar el contador
  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

  // Estilos para el componente
  const estiloContador = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#E0F7FA', // Fondo azul claro
    borderRadius: '10px',
    width: '200px',
    margin: '50px auto', // Centrado horizontal
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Sombra sutil
  };

  const estiloBoton = {
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#00796B', // Color verde oscuro
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const estiloValor = {
    fontSize: '2em',
    margin: '20px 0',
  };

  return (
    <div style={estiloContador}>
      <div style={estiloValor}>{contador}</div>
      <button style={estiloBoton} onClick={incrementar}>Incrementar</button>
      <button style={estiloBoton} onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default Contador;