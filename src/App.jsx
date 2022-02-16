import "./App.css";
import CartWidget from "./components/CartWidget";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            {/* <ItemListContainer greeting="Bienvenidos a la tienda de Grid y Koda"/> */}
            <ItemDetailContainer itemPedido={2} />
            <CartWidget />
        </div>
    );
}

export default App;
