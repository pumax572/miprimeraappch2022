import './App.css';//Integremos el módulo de CSS a WebPack
import Navbar from './components/Navbar/Navbar'; //Los componentes los nombramos utilizando PascalCase

function App() {
  
  //LÓGICA PARA EL COMPONENTE VISUAL
  
  
  //COMPONENTE VISUAL
  return (
    <div className="App">
      <Navbar/> {/* Llamamos al Navbar */}
    </div>
    
  );
}

export default App;
