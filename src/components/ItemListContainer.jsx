import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const productos = [
    {
        id: 1,
        title: "Arbol de 3 pisos",
        description:
            "Arbol revestido en alfombra, con 3 pisos de melamina las columnas tienen hilo sisal",
        price: 3500,
        sale: true,
        pictureURL: "../imgs/tree1.png",
    },
    {
        id: 2,
        title: "Arbol de 6 pisos",
        description:
            "Arbol revestido en alfombra, con 6 pisos de melamina las columnas tienen hilo sisal e impregnado con catnip, tiene juguetes colgantes para estimular a tus felinos y 2 casitas para esconderse",
        price: 9000,
        sale: false,
        pictureURL: "../imgs/tree2.jpeg",
    },
    {
        id: 3,
        title: "Arbol de 4 pisos",
        description:
            "Arbol revestido en alfombra, con 4 pisos de melamina, las columnas tienen hilo sisal e impregnado con catnip, apto exterior",
        price: 5000,
        sale: true,
        pictureURL: "../imgs/tree3.jpeg",
    },
    {
        id: 4,
        title: "Arbol de 4 pisos",
        description:
            "Arbol para gatos estilo industrial, con 4 pisos de madera de pino las columnas tienen hilo sisal,impregnado con catnip y maceta para yerba gatera",
        price: 6500,
        sale: true,
        pictureURL: "../imgs/tree4.jpeg",
    },
    {
        id: 5,
        title: "Arbol de 3 pisos",
        description:
            "Arbol revestido en alfombra, con 3 pisos de melamina y una cuchita de tela superresistente, las columnas tienen hilo sisal e impregnado con catnip",
        price: 4500,
        sale: false,
        pictureURL: "../imgs/tree5.jpeg",
    },
    {
        id: 6,
        title: "Arbol de 2 pisos",
        description:
            "Arbol revestido en alfombra, con 2 pisos de melamina tipo cucha",
        price: 3000,
        sale: false,
        pictureURL: "../imgs/tree6.jpeg",
    },
    {
        id: 7,
        title: "Arbol de 5 pisos",
        description:
            "Arbol revestido en alfombra, con 5 pisos de melamina las columnas tienen hilo sisal, impregnado con catnip y una cajita en altura",
        price: 7000,
        sale: false,
        pictureURL: "../imgs/tree7.jpeg",
    },
];
const pedirMasComprados = () => {
    let randomArray = [];
    let uniqueRandom = [];
    for (let i = 0; i < 4; i++) {
        randomArray.push(Math.floor(Math.random() * 7) + 1);
    }
    uniqueRandom = [...new Set(randomArray)];
    return uniqueRandom;
};

const pedirDatos = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (category === "sale") {
                let prodSale = [];
                prodSale = productos.filter((item) => item.sale === true);
                resolve(prodSale);
            } else if (category === "mas-comprados") {
                let productosMas = [];
                let masComprados = pedirMasComprados();
                masComprados.map((item) =>
                    productosMas.push(productos.find((i) => i.id === item))
                );
                resolve(productosMas);
            } else {
                resolve(productos);
            }
        }, 2000);
    });
};
const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const cate = useParams().catId;
    useEffect(() => {
        let getDatos = pedirDatos(cate);
        getDatos
            .then((resultado) => {
                setListaProductos(resultado);
                setLoaded(true);
            })
            .catch((error) => {
                console.error("No se encontraron los productos");
            });
    }, [cate]);

    return (
        <div>
            <h2>{greeting}</h2>
            {loaded ? (
                <ItemList products={listaProductos} />
            ) : (
                <h3>Cargando tus productos...</h3>
            )}
        </div>
    );
};

export default ItemListContainer;
