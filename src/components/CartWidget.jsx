import React from "react";
import useCartContext from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cart } = useCartContext();
    return (
        <Link to="/cart">
            <div className="carty">
                <span className="fontAwesomeCart">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </span>
                <span className="superUp">{cart.length}</span>
            </div>
        </Link>
    );
};

export default CartWidget;
