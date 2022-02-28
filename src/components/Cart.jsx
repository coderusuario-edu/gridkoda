import React from "react";
import useCartContext from "../context/CartContext";

const Cart = () => {
    const { cart } = useCartContext();

    return (
        <div>
            <h3>Carrito en construcción</h3>
            <p>
                nuestros trabajadores están doble horario para llegar al
                Timeline por favor no los acaricie ni les traiga Katnip
            </p>
            <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F4%2Fg7u55.jpg&f=1&nofb=1"
                alt=""
            />
            <ul>
                {cart.map((item, key) => (
                    <li key={key}>
                        id: {item.id}; producto: {item.title}; cantidad{" "}
                        {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
