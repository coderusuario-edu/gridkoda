import React from "react";
import { Link } from "react-router-dom";
import useCartContext from "../context/CartContext";

const Cart = () => {
    const { cart, removeItem, clear } = useCartContext();
    let carritoVacio = cart.length === 0;
    let totalPrecio = 0;
    cart.map((item) => {
        totalPrecio += item.price * item.quantity;
        return totalPrecio;
    });

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
                                <strong>ID-producto</strong>
                                <strong>Producto</strong>
                                <strong>Cantidad</strong>
                                <strong>Precio</strong>
                                <strong>Eliminar </strong>
                            </div>
                        </div>
                    </div>
                    {cart.map((item, key) => (
                        <div className="row p-3" key={key}>
                            <div className="col card">
                                <div className="card-body d-flex justify-content-between">
                                    <p>{item.id}</p>
                                    <p>{item.title}</p>
                                    <p>{item.quantity}</p>
                                    <p>{item.price}</p>
                                    <button
                                        onClick={() => {
                                            removeItem(item.id);
                                        }}
                                        className="btn btn-danger"
                                    >
                                        {" "}
                                        X{" "}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="row p-3">
                        <div className="col card">
                            <div className="card-body d-flex justify-content-between">
                                <strong>Total</strong>
                                <strong>{totalPrecio} </strong>
                            </div>
                        </div>
                    </div>{" "}
                    <div className="row p-3">
                        <div className="col  d-flex justify-content-between">
                            <button
                                className="btn btn-outline-danger"
                                onClick={clear}
                            >
                                Vaciar Carrito
                            </button>
                            <button className="btn btn-success">
                                Terminar Compra
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
