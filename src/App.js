import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import './style.css';
import marcoBallesi from './logos/marcoBallesi.png';
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  return (
    <>
      <img className="logo" src={marcoBallesi}></img>
      <h2 className="tittle"> Marco Ballesi </h2>
      <p className="subheading"> Tienda de arte </p>
      <hr className="linea"/>

      <NavBar/>
      <ItemListContainer
        greeting="Bienvenidx"
      />
      <ItemDetailContainer />
    </>
  );
}

export default App;
