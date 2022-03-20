import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import useFireStore from "../hooks/useFireStore";

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const { getProduct } = useFireStore();

    const itemPedido = useParams().itemId;
    useEffect(() => {
        let product = getProduct(itemPedido);
        product.then((resultado) => {
            setDetalle(resultado);
            setLoaded(true);
        });
    }, [itemPedido]);
    return <div>{loaded ? <ItemDetail producto={detalle} /> : <Loader />}</div>;
};

export default ItemDetailContainer;
