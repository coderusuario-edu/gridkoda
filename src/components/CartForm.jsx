import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCartContext from "../context/CartContext";
import { generarOrder } from "../firebase/firebase";

const CartForm = () => {
    const [buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: "",
    });

    let navigate = useNavigate();

    const { clear, cart, totalCarrito } = useCartContext();

    const clearBuyer = () => {
        setBuyer({
            name: "",
            phone: "",
            email: "",
        });
    };

    const handleInput = (evt) => {
        const campo = evt.target.name;
        setBuyer({ ...buyer, [campo]: evt.target.value });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let precioTotal = totalCarrito();
        let itemsCarrito = [];

        cart.map((item) => {
            return itemsCarrito.push({
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                price: item.price,
            });
        });
        console.table(itemsCarrito);
        const orderData = {
            buyer,
            items: itemsCarrito,
            precioTotal,
        };
        let orderId = generarOrder(orderData);
        orderId.then((resolve) => {
            console.log(resolve);
            navigate(`/yay/${resolve}`);
        });
    };

    return (
        <div className="card mx-1">
            <div className="card-header">
                <h5 className="text-start">
                    Para finalizar tu compra, completa tus datos
                </h5>
            </div>
            <div className="card-body">
                <form
                    className="mx-1 needs-validation"
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <div className="form-floating mb-3">
                        <input
                            name="name"
                            onChange={handleInput}
                            value={buyer.name}
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            required
                        />
                        <label htmlFor="floatingInput">Nombre y Apellido</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            name="phone"
                            onChange={handleInput}
                            value={buyer.phone}
                            type="phone"
                            className="form-control"
                            id="floatingPhone"
                            placeholder="Password"
                            required
                        />
                        <label htmlFor="floatingPhone">Teléfono</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            name="email"
                            onChange={handleInput}
                            value={buyer.email}
                            type="email"
                            className="form-control"
                            id="floatingEmail"
                            placeholder="Password"
                            required
                        />
                        <label htmlFor="floatingEmail">Email</label>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button
                            onClick={() => {
                                clear();
                                clearBuyer();
                            }}
                            className="btn btn-outline-danger"
                        >
                            Cancelar la compra
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="btn btn-success"
                        >
                            Finalizar la compra
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CartForm;
