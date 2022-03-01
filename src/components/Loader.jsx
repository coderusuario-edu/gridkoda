import React from "react";

const Loader = () => {
    return (
        <>
            <div className="mt-5">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
                <h3>Cargando sus productos</h3>
            </div>
        </>
    );
};

export default Loader;
