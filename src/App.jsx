import './App.css';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a la tienda de Grid y Koda"/>
      <CartWidget />
    </div>
  );
}

export default App;
