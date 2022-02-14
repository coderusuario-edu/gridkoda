import React from "react";
import ItemCount from "./ItemCount";

const Item = ({ nombre, descripcion, precio, imagen }) => {
    return (
        <div className="col p-3">
            <div className="card h-100 mx-3">
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
                <ItemCount stock={5} initial={1} />
            </div>
        </div>
    );
};

export default Item;
