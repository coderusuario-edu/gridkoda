import React from "react";
import useCartContext from "../context/CartContext";

const CartItem = ({ item }) => {
    const { removeItem } = useCartContext();
    return (
        <div className="row p-3">
            <div className="col card">
                <div className="card-body d-flex justify-content-between">
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
    );
};

export default CartItem;
