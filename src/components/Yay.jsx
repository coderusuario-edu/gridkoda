import React from "react";
import { Link, useParams } from "react-router-dom";

const Yay = () => {
    const id = useParams().id;

    return (
        <>
            <div className="row mt-3">
                <div className="col mt-3">
                    <h3>Felicidades tu gato va a ser muy feliz</h3>
                    <img
                        src="https://i.pinimg.com/originals/6e/34/f0/6e34f0027ae54a25873e2e07cf0aafb2.gif"
                        alt="Happy Cat"
                        width="200"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>
                        Tu order de compra se ha generado, pronto recibirás un
                        mail con los detalles del envío
                    </p>
                    <p>Tu número de seguimiento de la compra es {id}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to="/">
                        <button className="btn btn-bk mt-3">
                            Comprar de nuevo
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Yay;
