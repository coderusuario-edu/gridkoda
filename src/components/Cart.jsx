import React, { useState } from "react";
import { Link } from "react-router-dom";
import useCartContext from "../context/CartContext";
import CartForm from "./CartForm";
import CartItem from "./CartItem";

const Cart = () => {
    const [finalizar, setFinalizar] = useState(false);
    const { cart, clear, totalCarrito } = useCartContext();
    let carritoVacio = cart.length === 0;

    return (
        <>
            {carritoVacio ? (
                <div className="mt-5 d-flex flex-column align-items-center">
                    <h3>Oh! tu carrito está vacío</h3>
                    <img src="../imgs/emptyBasket.png" width="500" alt="" />
                    <p>
                        y tu gato tomó provecho de eso, comprá un arbol para que
                        descanse como el rey
                    </p>
                    <Link to="/">
                        <button className="btn btn-bk mt-3">
                            Comenzar la compra
                        </button>
                    </Link>
                </div>
            ) : (
                <div>
                    <div className="row p-3">
                        <div className="col card">
                            <div className="card-body d-flex justify-content-between">
                                <strong>Producto</strong>
                                <strong>Cantidad</strong>
                                <strong>Precio</strong>
                                <strong>Eliminar </strong>
                            </div>
                        </div>
                    </div>
                    {cart.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <div className="row p-3">
                        <div className="col card">
                            <div className="card-body d-flex justify-content-between">
                                <strong>Total</strong>
                                <strong> ${totalCarrito()} </strong>
                            </div>
                        </div>
                    </div>{" "}
                    <div className="row p-3">
                        {!finalizar && (
                            <div className="col d-flex justify-content-between">
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={clear}
                                >
                                    Vaciar Carrito
                                </button>
                                <button
                                    onClick={() => {
                                        setFinalizar(true);
                                    }}
                                    className="btn btn-success"
                                >
                                    Comprar
                                </button>
                            </div>
                        )}
                    </div>
                    <>{finalizar && <CartForm />}</>
                </div>
            )}
        </>
    );
};

export default Cart;
