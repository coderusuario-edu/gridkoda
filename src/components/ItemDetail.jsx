import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col p-3">
                    <div className="card h-100 mx-3">
                        <div className="card-title row my-3">
                            <div className="col">
                                <h3>{producto.title}</h3>
                            </div>
                        </div>
                        <div className="card-body row">
                            <div className="col-md-6">
                                {" "}
                                <div className="card-img">
                                    <img
                                        className="card-img-top p-3"
                                        src={producto.pictureURL}
                                        alt="{nombre}"
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card-text">
                                    <p className="text-start">
                                        {producto.description}
                                    </p>
                                    <p className="card-text">
                                        ${producto.price}
                                    </p>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-6 d-flex flex-column">
                                        <ItemCount stock={5} initial={1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;