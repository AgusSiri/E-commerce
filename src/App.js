import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import './style.css';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <>
      <h2 className="tittle"> Bienvenidxs </h2>
      <NavBar/>
      <ItemListContainer
        greeting="Bienvenidx"
      />
      <ItemCount init="0" min="0" max="20" onAdd={() => console.log("onAdd")} />
    </>
  );
}

export default App;
