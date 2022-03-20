import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCartContext from "../context/CartContext";
import useFireStore from "../hooks/useFireStore";
import FormInput from "./FormInput";

const CartForm = () => {
    const [buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const [error, setError] = useState({
        name: null,
        phone: null,
        email: null,
    });

    const navigate = useNavigate();

    const { generarOrder } = useFireStore();

    const { clear, cart, totalCarrito } = useCartContext();

    const clearBuyer = () => {
        setBuyer({
            name: "",
            phone: "",
            email: "",
        });
    };

    const FormLabels = [
        { k: "name", name: "Nombre y apellido", type: "text" },
        { k: "phone", name: "Teléfono", type: "number" },
        { k: "email", name: "Email", type: "email" },
    ];

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
        const orderData = {
            buyer,
            items: itemsCarrito,
            precioTotal,
        };
        let orderId = generarOrder(orderData);
        orderId.then((resolve) => {
            clear();
            navigate(`/yay/${resolve}`);
        });
    };

    const handleBlur = (evt) => {
        let value = evt.target.value;
        let nameObj = evt.target.name;
        if (value === "") {
            setError({ ...error, [nameObj]: "Este campo es obligatorio" });
            return;
        }
        setError({});
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
                    {FormLabels.map((label, idx) => (
                        <FormInput
                            key={idx}
                            name={label.k}
                            label={label.name}
                            type={label.type}
                            handleInput={handleInput}
                            value={buyer}
                            handleBlur={handleBlur}
                            error={error}
                        />
                    ))}
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
                            disabled={
                                !(
                                    buyer.name !== "" &&
                                    buyer.email !== "" &&
                                    buyer.phone !== ""
                                )
                            }
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
