import './App.css';//Integremos el módulo de CSS a WebPack
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'; //Los componentes los nombramos utilizando PascalCase

function App() {
  
    return (
    <div className="App">
      <Navbar/> {/* Llamamos al Navbar */}
      <ItemListContainer greeting ='No soy taaaaaan responsive por ahora...'/>
    </div>
    
  );
}

export default App;
