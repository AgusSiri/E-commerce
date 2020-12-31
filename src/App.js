import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import './style.css';

function App() {
  return (
    <>
      <h2 className="tittle"> Bienvenidxs </h2>
      <NavBar/>
      <ItemListContainer
        greeting="Bienvenidx"
      />
    </>
  );
}

export default App;
