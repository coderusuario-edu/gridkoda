import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, descripcion, precio, imagen }) => {
    return (
        <div className="col p-3">
            <div className="card h-100 mx-3 hov">
                <div className="card-img">
                    <img
                        className="card-img-top p-3"
                        src={imagen}
                        alt="{nombre}"
                    />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{nombre}</h4>
                    <p className="card-text">${precio}</p>
                </div>
                <Link
                    to={`/item/${id}`}
                    className="btn btn-outline-bk mx-3 mb-3"
                >
                    Ver más
                </Link>
            </div>
        </div>
    );
};

export default Item;
