import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import './style.css';
import marcoBallesi from './logos/marcoBallesi.png';
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom' ;

function App() {
  return (
    <>
      <img className="logo" src={marcoBallesi}></img>
      <h2 className="tittle"> Marco Ballesi </h2>
      <p className="subheading"> Tienda de arte </p>
      <hr className="linea"/>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer
              greeting="Bienvenidx"
            />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route> 
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
