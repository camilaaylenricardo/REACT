import React from 'react';

function TarjetaPresentacion({ nombre, apellido, profesion, imagenUrl }) {
  // Definir estilos dinámicos
  const estiloTarjeta = {
    backgroundColor: '#F0F8FF', // Fondo azul claro
    color: '#333', // Texto gris oscuro
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Sombra sutil
    maxWidth: '300px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: '20px auto', // Centrado horizontal
  };

  const estiloImagen = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '15px',
  };

  const estiloNombre = {
    fontSize: '1.5em',
    fontWeight: 'bold',
    margin: '10px 0',
  };

  const estiloProfesion = {
    fontSize: '1.2em',
    color: '#555', // Texto gris más claro
    marginBottom: '10px',
  };

  return (
    <div style={estiloTarjeta}>
      <img src={imagenUrl} alt={`${nombre} ${apellido}`} style={estiloImagen} />
      <div style={estiloNombre}>{nombre} {apellido}</div>
      <div style={estiloProfesion}>{profesion}</div>
    </div>
  );
}

export default TarjetaPresentacion;