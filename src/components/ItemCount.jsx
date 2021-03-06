import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCartContext from "../context/CartContext";

const ItemCount = ({ id, stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);
    const [queda, setQueda] = useState(stock - 1);

    const { isInCart } = useCartContext();
    const addItem = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
            setQueda(queda - 1);
        }
    };

    const substractItem = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
            setQueda(queda + 1);
        }
    };

    return (
        <>
            {isInCart(id) ? (
                <Link to="/cart">
                    <div className="d-grid">
                        <button className="btn btn-outline-bk mt-1">
                            <small> Ir al carrito</small>
                        </button>
                    </div>
                </Link>
            ) : (
                <>
                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className="btn btn-bk"
                            onClick={() => {
                                substractItem();
                            }}
                        >
                            -
                        </button>
                        <span className="btn btn-outline-bk"> {cantidad} </span>
                        <button
                            type="button"
                            className={
                                cantidad === stock
                                    ? "btn btn-bk disabled"
                                    : "btn btn-bk"
                            }
                            onClick={() => {
                                addItem();
                            }}
                        >
                            +
                        </button>
                    </div>
                    {queda > 0 ? (
                        <small className="small">
                            Quedan {queda} productos
                        </small>
                    ) : (
                        <small className="small">Seleccionaste todos</small>
                    )}
                    <button
                        className="btn btn-outline-bk mt-1"
                        onClick={() => {
                            onAdd(cantidad);
                        }}
                    >
                        <small> Agregar al carrito</small>
                    </button>
                </>
            )}
        </>
    );
};

export default ItemCount;
