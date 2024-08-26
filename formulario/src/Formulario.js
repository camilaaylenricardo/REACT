import React, { useState } from 'react';

function Formulario() {
  // Estado para almacenar el nombre del usuario
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Función para manejar el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault(); // Evitar que se recargue la página
    if (nombre.trim() === '') return; // Evitar nombres vacíos
    setMensaje(`¡Hola, ${nombre}! Bienvenido.`);
    setNombre(''); // Limpiar el campo de entrada
  };

  // Estilos para el componente
  const estiloFormulario = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#F3E5F5', // Fondo morado claro
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Sombra sutil
    textAlign: 'center',
  };

  const estiloInput = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    marginBottom: '10px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const estiloBoton = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#6200EA', // Color morado oscuro
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const estiloMensaje = {
    marginTop: '20px',
    fontSize: '1.2em',
    color: '#4A148C', // Color morado oscuro
  };

  return (
    <div style={estiloFormulario}>
      <form onSubmit={manejarEnvio}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ingresa tu nombre"
          style={estiloInput}
        />
        <button type="submit" style={estiloBoton}>Enviar</button>
      </form>
      {mensaje && <div style={estiloMensaje}>{mensaje}</div>}
    </div>
  );
}

export default Formulario;