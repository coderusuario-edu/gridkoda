import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const productos = [
    {
        id: 1,
        title: "Arbol de 3 pisos",
        description:
            "Arbol revestido en alfombra, con 3 pisos de melamina las columnas tienen hilo sisal",
        price: 3500,
        pictureURL: "../imgs/tree1.png",
    },
    {
        id: 2,
        title: "Arbol de 6 pisos",
        description:
            "Arbol revestido en alfombra, con 6 pisos de melamina las columnas tienen hilo sisal e impregnado con catnip, tiene juguetes colgantes para estimular a tus felinos y 2 casitas para esconderse",
        price: 9000,
        pictureURL: "../imgs/tree2.jpeg",
    },
    {
        id: 3,
        title: "Arbol de 4 pisos",
        description:
            "Arbol revestido en alfombra, con 4 pisos de melamina, las columnas tienen hilo sisal e impregnado con catnip, apto exterior",
        price: 5000,
        pictureURL: "../imgs/tree3.jpeg",
    },
    {
        id: 4,
        title: "Arbol de 4 pisos",
        description:
            "Arbol para gatos estilo industrial, con 4 pisos de madera de pino las columnas tienen hilo sisal,impregnado con catnip y maceta para yerba gatera",
        price: 6500,
        pictureURL: "../imgs/tree4.jpeg",
    },
    {
        id: 5,
        title: "Arbol de 3 pisos",
        description:
            "Arbol revestido en alfombra, con 3 pisos de melamina y una cuchita de tela superresistente, las columnas tienen hilo sisal e impregnado con catnip",
        price: 4500,
        pictureURL: "../imgs/tree5.jpeg",
    },
    {
        id: 6,
        title: "Arbol de 2 pisos",
        description:
            "Arbol revestido en alfombra, con 2 pisos de melamina tipo cucha",
        price: 3000,
        pictureURL: "../imgs/tree6.jpeg",
    },
    {
        id: 7,
        title: "Arbol de 5 pisos",
        description:
            "Arbol revestido en alfombra, con 5 pisos de melamina las columnas tienen hilo sisal, impregnado con catnip y una cajita en altura",
        price: 7000,
        pictureURL: "../imgs/tree7.jpeg",
    },
];

const getItem = (item) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let productoEncontrado = productos.find((it) => it.id === item);
            return resolve(productoEncontrado);
        }, 2000);
    });
};

const ItemDetailContainer = ({ itemPedido }) => {
    const [detalle, setDetalle] = useState(null);
    useEffect(() => {
        let product = getItem(itemPedido);
        product.then((resultado) => {
            setDetalle(resultado);
        });
    }, [itemPedido]);
    return <div>{detalle && <ItemDetail producto={detalle} />}</div>;
};

export default ItemDetailContainer;
