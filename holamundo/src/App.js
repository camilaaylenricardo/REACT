import logo from './logo.svg';
import './App.css';

function App() {
  // Definir estilos dinámicos
  const dynamicStyle = {
    color: '#4A4A4A', // Gris oscuro para el texto
    backgroundColor: '#FFDEE9', // Rosa claro para el fondo
    padding: '40px',
    fontFamily: 'Verdana, sans-serif',
    textAlign: 'center',
    borderRadius: '15px',
    width: '50%',
    margin: '100px auto', // Centrado horizontal y margen superior
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Sombra sutil
  };

  return (
    <div style={dynamicStyle}>
      <h1>Hola Mundo</h1>
    </div>
  );
}
export default App;
