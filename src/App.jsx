import "./App.css";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ItemListContainer
                                greeting={
                                    "Bienvenidos a la tienda de Grid y Koda"
                                }
                            />
                        }
                    />
                    <Route
                        path="/category/:catId"
                        element={
                            <ItemListContainer
                                greeting={"Lista de productos por categoría"}
                            />
                        }
                    />
                    <Route
                        path="/item/:itemId"
                        element={<ItemDetailContainer />}
                    />
                </Routes>
                <CartWidget />
            </div>
        </BrowserRouter>
    );
}

export default App;
