import './App.css';//Integremos el módulo de CSS a WebPack
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainar/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar'; //Los componentes los nombramos utilizando PascalCase
import Counter from './components/Counter/Counter';

function App() {
  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }
    return (
    <div className="App">
      <Navbar/> {/* Llamamos al Navbar */}
      <ItemListContainer greeting ='No soy taaaaaan responsive por ahora...'/>
      <ItemDetailContainer/>
      <Counter stock={14} onAdd={handleOnAdd}/>
    </div>
    
  );
}

export default App;
