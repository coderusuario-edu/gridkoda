import React from "react";
import useCartContext from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { cart } = useCartContext();
    let cartNumber = 0;
    cart.map((item) => {
        console.log(item.quantity);
        return (cartNumber += item.quantity);
    });
    return (
        <>
            {cart.length !== 0 && (
                <Link to="/cart">
                    <div className="carty">
                        <span className="fontAwesomeCart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                        <span className="superUp">{cartNumber}</span>
                    </div>
                </Link>
            )}
        </>
    );
};

export default CartWidget;
