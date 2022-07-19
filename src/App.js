import logo from './logo.svg';
import './App.css';//Integremos el módulo de CSS a WebPack
import Navbar from './components/navbar/Navbar';

function App() {
  
  //LÓGICA PARA EL COMPONENTE VISUAL
  
  
  //COMPONENTE VISUAL
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos a mi primera APP con React!!!
        </p>
      </header>
      <Navbar/> {/* Llamamos al Navbar */}

    </div>
    
  );
}

export default App;
