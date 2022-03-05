import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts, getProductCategory } from "../firebase/firebase";
import ItemList from "./ItemList";
import Loader from "./Loader";

const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const cate = useParams().catId;
    useEffect(() => {
        let resultado = !cate ? getAllProducts() : getProductCategory(cate);

        resultado
            .then((itemsPromesa) => {
                setLoaded(true);
                setListaProductos(itemsPromesa);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [cate]);

    return (
        <div>
            <h2>{greeting}</h2>
            {loaded ? <ItemList products={listaProductos} /> : <Loader />}
        </div>
    );
};

export default ItemListContainer;
