import React, { useState } from 'react';

function ListaTareas() {
  // Estado para la lista de tareas y el texto de la nueva tarea
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() === '') return; // Evitar agregar tareas vacías
    setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
    setNuevaTarea('');
  };

  // Función para marcar una tarea como completada
  const marcarComoCompletada = (index) => {
    const tareasActualizadas = tareas.map((tarea, i) =>
      i === index ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(tareasActualizadas);
  };

  // Estilos para el componente
  const estiloLista = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#F9FBE7', // Fondo amarillo claro
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Sombra sutil
  };

  const estiloEntrada = {
    display: 'flex',
    marginBottom: '20px',
  };

  const estiloInput = {
    flex: '1',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  };

  const estiloBoton = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#00796B', // Color verde oscuro
    color: 'white',
    cursor: 'pointer',
    marginLeft: '10px',
  };

  const estiloTarea = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const estiloTexto = (completada) => ({
    textDecoration: completada ? 'line-through' : 'none',
    color: completada ? '#888' : '#333',
    flex: '1',
  });

  return (
    <div style={estiloLista}>
      <div style={estiloEntrada}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          style={estiloInput}
          placeholder="Nueva tarea"
        />
        <button onClick={agregarTarea} style={estiloBoton}>Agregar</button>
      </div>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} style={estiloTarea}>
            <span style={estiloTexto(tarea.completada)}>{tarea.texto}</span>
            <button
              onClick={() => marcarComoCompletada(index)}
              style={estiloBoton}
            >
              {tarea.completada ? 'Desmarcar' : 'Completar'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;