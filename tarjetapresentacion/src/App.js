import logo from './logo.svg';
import './App.css';
import TarjetaPresentacion from './TarjetaPresentacion';

function App() {
  return (
    <div>
      <TarjetaPresentacion
        nombre="Camila"
        apellido="Ricardo"
        profesion="Desarrolladora Web"
        imagenUrl="https://randomuser.me/api/portraits/women/21.jpg"
      />
    </div>
  );
}

export default App;
